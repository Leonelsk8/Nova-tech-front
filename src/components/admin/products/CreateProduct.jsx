import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {createProduct, uploadImage , uploadImagess} from '../../../API/Api';
import {customAlert} from '../../../assets/utils/alters';


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
    
    
    if(sendDisabled) return customAlert('Error', lang.admin.createProduct.messageAlert1, 'warning', 'Ok', ()=>{console.log('error')});

    console.log(productData);

    try {
      await createProduct(productData)
      .then(response => {customAlert(lang.admin.createProduct.success, lang.admin.createProduct.messageAlert2 , 'success', 'Ok', ()=>{console.log(response)})})
      .catch(error => {customAlert('Error', lang.admin.createProduct.messageAlert3,'error', 'Ok', ()=>{console.log(error)})})
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    if(productData.titleEs !== '' && productData.titleEn !== '' && productData.descriptionEs !== '' && productData.descriptionEn !== '' && productData.category !== '' && productData.price !== null && productData.quantity !== null && imageUrl !== '' && imagesUrls.length !== 0){
      setSendDisabled(false)
    }
  },[productData, imageUrl, imagesUrls]);

  return (
    <div>
      <h2>{lang.admin.createProduct.title}</h2>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputTitleEs" className="form-label">{lang.admin.createProduct.titleEs}</label>
          <input type="text" onChange={handleChange} name='titleEs' className="form-control" id="inputTitleEs" maxLength={65} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitleEn" className="form-label">{lang.admin.createProduct.titleEn}</label>
          <input type="text" onChange={handleChange} name='titleEn' className="form-control" id="inputTitleEn"  maxLength={65}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescriptionEs" className="form-label">{lang.admin.createProduct.descEs}</label>
          <textarea className="form-control" onChange={handleChange} name='descriptionEs' id="inputDescriptionEs" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescriptionEn" className="form-label">{lang.admin.createProduct.descEn}</label>
          <textarea className="form-control" onChange={handleChange} name='descriptionEn' id="inputDescriptionEn" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">{lang.admin.createProduct.price}</label>
          <div className='d-flex align-items-center'>
            <input type="number" onChange={handleChange} name='price' className={`form-control ${style.inputWidthTwo}`} id="inputPrice"/>
            <h5 className='ms-2 mt-1'>$</h5>
          </div>
        </div>
        <div className={`mb-3`}>
        <label htmlFor="selectCategory" className="form-label">{lang.admin.createProduct.category}</label>
          <select className={`form-select ${style.inputWidth}`} name='category' onChange={handleChange} defaultValue='' aria-label="Default select example" id='selectCategory'>
            <option value=''>{lang.admin.createProduct.select}</option>
            <option value="PC-COMPLETA">{lang.admin.createProduct.selectOpc1}</option>
            <option value="PC-HARDWARE">{lang.admin.createProduct.selectOpc2}</option>
            <option value="PC-PERIFERICO">{lang.admin.createProduct.selectOpc3}</option>
            <option value="PC-NOTE">{lang.admin.createProduct.selectOpc4}</option>
            <option value="TV-SAMSUNG">{lang.admin.createProduct.selectOpc5}</option>
            <option value="TV-BGH">{lang.admin.createProduct.selectOpc6}</option>
            <option value="TV-LG">{lang.admin.createProduct.selectOpc7}</option>
            <option value="CEL-SAMSUNG">{lang.admin.createProduct.selectOpc8}</option>
            <option value="CEL-MOTOROLA">{lang.admin.createProduct.selectOpc9}</option>
            <option value="CEL-IPHONE">{lang.admin.createProduct.selectOpc10}</option>
            <option value="AUD-PARLANTES">{lang.admin.createProduct.selectOpc11}</option>
            <option value="AUD-AURIS">{lang.admin.createProduct.selectOpc12}</option>
            <option value="AUD-MICROFONO">{lang.admin.createProduct.selectOpc13}</option>
            <option value="HELADERA">{lang.admin.createProduct.selectOpc14}</option>
            <option value="FREEZER">{lang.admin.createProduct.selectOpc15}</option>
            <option value="CLIM-AIR">{lang.admin.createProduct.selectOpc16}</option>
            <option value="CLIM-CALE">{lang.admin.createProduct.selectOpc17}</option>
            <option value="CLIM-VENTI">{lang.admin.createProduct.selectOpc18}</option>
            <option value="TABLET-SAMSUNG">{lang.admin.createProduct.selectOpc19}</option>
            <option value="TABLET-NOGA">{lang.admin.createProduct.selectOpc20}</option>
            <option value="TABLET-BGH">{lang.admin.createProduct.selectOpc21}</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputQuantity" className="form-label">{lang.admin.createProduct.quantity}</label>
          <input type="number" className={`form-control ${style.inputWidthTwo}`} name='quantity' onChange={handleChange} id="inputQuantity"/>
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="imagePortada" className="form-label">{lang.admin.createProduct.image}</label>
            <input className="form-control" name="image" onChange={handleImageChange} type="file" id="imagePortada" accept="image/jpeg, image/png, image/webp"/>
          </div>
          <div className='row py-2 px-5 justify-content-center'>
            <div className='col-12 border border-1 border-secondary d-flex justify-content-center py-3 align-items-center'>
              <div className='row'>
                {imageUrl !== '' ? <div className='col-10 col-md-8 col-lg-6'><img className={style.imageUpload} src={imageUrl} alt="Uploaded"/></div> : <p>{lang.admin.createProduct.loaderOne}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="imagenes" className="form-label">{lang.admin.createProduct.images}</label>
            <input className="form-control" name="imagess" onChange={handleImagessChange} type="file" id="imagenes" multiple accept="image/jpeg, image/png, image/webp"/>
          </div>
          <div className='row py-2 px-5 justify-content-center'>
            <div className='col-12 border border-1 border-secondary d-flex justify-content-center py-3 align-items-center'>
              <div className='row'>
                {imagesUrls.length !== 0 ? imagesUrls.map((url, index)=>(<div key={index} className='col-5 col-md-4 col-lg-4'><img className={style.imageUpload} key={index} src={url} alt="Uploaded"/></div>)) : <p>{lang.admin.createProduct.loaderTwo}</p>}
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={sendDisabled ? 'buttDisabled' : `bgFootButt-${modeDL} butt-${modeDL} butt text-white`} disabled={sendDisabled ? true : false}>{lang.admin.createProduct.create}</button>
      </form>
    </div>
  )
}

export default CreateProduct