import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {createProduct, uploadImage , uploadImagess} from '../../../API/Api';


const CreateProduct = (props) => {
  const {modeDL, textDL, lang, style} = props;
  const [imageUrl, setImageUrl] = useState('');
  const [imagesUrls, setImagesUrls] = useState([]);
  const [sendDisabled, setSendDisabled] = useState(true);
  const [productData, setProductData] = useState({
    titleEs: '',
    titleEn: '',
    descriptionEs: '',
    descriptionEn: '',
    price: null,
    category: '',
    quantity: null,
  });


  const handleImageChange = async (event) => {
    const formImage = new FormData();
    formImage.append("image", event.target.files[0]);
    await uploadImage(formImage)
    .then(response => {setImageUrl(response.data.url)})
    .catch(error => console.log(error))
  };

  const handleImagessChange = async (event) => {
    const formImagess = new FormData();
    for (let i = 0; i < event.target.files.length; i++) {
      formImagess.append("imagess", event.target.files[i]);
    }
    await uploadImagess(formImagess)
      .then((response) => {
        const urls = response.data.map((result) => result.url);
        setImagesUrls(urls);
      })
      .catch((error) => console.log(error));
  };

  const handleChange =(e) => {
    setProductData((prev) =>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  useEffect(()=>{
    if(imageUrl !== ''){
      productData.icon = imageUrl
    }
  },[imageUrl])

  useEffect(()=>{
    if(imagesUrls.length !== 0){
      productData.img = imagesUrls
    }
  },[imagesUrls])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    
    if(sendDisabled) return alert('No estan todos los campos completados');

    console.log(productData);

    try {
      await createProduct(productData)
      .then(response => {alert('producto creado con exito')})
      .catch(error => console.log(error))
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    if(productData.titleEs !== '' && productData.titleEn !== '' && productData.descriptionEs !== '' && productData.descriptionEn !== '' && productData.category !== '' && productData.price !== null && productData.quantity !== null && imageUrl !== '' && imagesUrls.length !== 0){
      setSendDisabled(false)
    }
  },[productData]);

  return (
    <div>
      <h2>Crear producto</h2>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputTitleEs" className="form-label">Título en Español</label>
          <input type="text" onChange={handleChange} name='titleEs' className="form-control" id="inputTitleEs" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitleEn" className="form-label">Título en Inglés</label>
          <input type="text" onChange={handleChange} name='titleEn' className="form-control" id="inputTitleEn"/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescriptionEs" className="form-label">Descripción en Español</label>
          <textarea className="form-control" onChange={handleChange} name='descriptionEs' id="inputDescriptionEs" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescriptionEn" className="form-label">Descripción en Inglés</label>
          <textarea className="form-control" onChange={handleChange} name='descriptionEn' id="inputDescriptionEn" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">Precio {`(Ingrese sin puntos)`}</label>
          <div className='d-flex align-items-center'>
            <input type="number" onChange={handleChange} name='price' className={`form-control ${style.inputWidthTwo}`} id="inputPrice"/>
            <h5 className='ms-2 mt-1'>$</h5>
          </div>
        </div>
        <div className={`mb-3`}>
        <label htmlFor="selectCategory" className="form-label">Categoria</label>
          <select className={`form-select ${style.inputWidth}`} name='category' onChange={handleChange} defaultValue='' aria-label="Default select example" id='selectCategory'>
            <option value=''>Seleccionar</option>
            <option value="PC-COMPLETA">Pc completa</option>
            <option value="PC-HARDWARE">Hardware</option>
            <option value="PC-PERIFERICO">Periferico</option>
            <option value="PC-NOTE">Notebook</option>
            <option value="TV-SAMSUNG">TV Samsung</option>
            <option value="TV-BGH">TV BGH</option>
            <option value="TV-LG">TV LG</option>
            <option value="CEL-SAMSUNG">Celular Samsung</option>
            <option value="CEL-MOTOROLA">Celular Motorola</option>
            <option value="CEL-IPHONE">Iphone</option>
            <option value="AUD-PARLANTES">Parlantes</option>
            <option value="AUD-AURIS">Auriculares</option>
            <option value="AUD-MICROFONO">Microfono</option>
            <option value="HELADERA">Heladera</option>
            <option value="FREEZER">Freezer</option>
            <option value="CLIM-AIR">Aire acondicionado</option>
            <option value="CLIM-CALE">Calefactor</option>
            <option value="CLIM-VENTI">Ventilador</option>
            <option value="TABLET-SAMSUNG">Tablet Samsung</option>
            <option value="TABLET-NOGA">Tablet Noga</option>
            <option value="TABLET-BGH">Tablet BGH</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputQuantity" className="form-label">Cantidad</label>
          <input type="number" className={`form-control ${style.inputWidthTwo}`} name='quantity' onChange={handleChange} id="inputQuantity"/>
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="imagePortada" className="form-label">Ingrese Imagen de portada {'(solo una)'}</label>
            <input className="form-control" name="image" onChange={handleImageChange} type="file" id="imagePortada"/>
          </div>
          <div className='row py-2 px-5 justify-content-center'>
            <div className='col-12 border border-1 border-secondary d-flex justify-content-center py-3 align-items-center'>
              {imageUrl !== '' ? <img width={'250px'} src={imageUrl} alt="Uploaded"/> : <p>Espere a que se suba la imagen</p>}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="imagenes" className="form-label">Ingrese Imagenes de muestra</label>
            <input className="form-control" name="imagess" onChange={handleImagessChange} type="file" id="imagenes" multiple/>
          </div>
          <div className='row py-2 px-5 justify-content-center'>
            <div className='col-12 border border-1 border-secondary d-flex justify-content-center py-3 align-items-center'>
              {imagesUrls.length !== 0 ? imagesUrls.map((url, index)=>(<img width={'250px'} key={index} src={url} alt="Uploaded"/>)) : <p>Espere a que se suban las imagenes</p>}
            </div>
          </div>
        </div>
        <button type="submit" className={sendDisabled ? 'buttDisabled' : `bgFootButt-${modeDL} butt-${modeDL} butt text-white`} disabled={sendDisabled ? true : false}>Crear Producto</button>
      </form>
    </div>
  )
}

export default CreateProduct