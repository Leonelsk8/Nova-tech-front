import React, {useState ,useEffect} from 'react';
import { getAllProducts, getProductById, editProduct} from '../../../API/Api';
import Loader from '../../loader/Loader';
import {customAlert} from '../../../assets/utils/alters';

const EditProduct = (props) => {
  const {style, textDL, modeDL, lang, token} = props;
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [productSearch, setProductSearch] = useState(null);
  const [productId, setProductId] = useState({
    titleEs: '',
    titleEn: '',
    descriptionEs: '',
    descriptionEn: '',
    price: null,
    quantity: null,
  });
  const [sendDisabled, setSendDisabled] = useState(true);
  const [productEdit, setProductEdit] = useState(null);
  const [modal, setModal] = useState(false);
  useEffect(()=>{
    try {
      const resp = async()=>{
        await getAllProducts()
        .then((response)=>{setProducts(response.data); setLoading(false);})
        .catch((error)=>console.log(error))
      }
      resp();
    } catch (error) {
      console.log(error)
    }
  },[]);

  const render = async()=>{
    await getAllProducts()
    .then((response)=>{setProducts(response.data); setLoading(false); setProductSearch(null)})
    .catch((error)=>console.log(error))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const postFiltrados = products.filter((item) => {
      let title = lang.Languaje.lang === 'es' ? item.titleEs.toLowerCase() : item.titleEn.toLowerCase();
      return title.includes(search);
    });
    postFiltrados.length >= 1 ? setProductSearch(postFiltrados) : customAlert(lang.admin.notResult, lang.admin.searchNot, 'info', 'Ok', ()=>{}); 
    
  }

  const handleChange = (e)=>{
    e.target.value !== '' ? setSearch(e.target.value) : setProductSearch(null);
  }

  const getProductId = async(id)=>{
    
    await getProductById(id)
    .then((response)=>{setProductId(response.data); setProductEdit(response.data); setModal(true)})
    .catch((error)=>{console.log(error)})
  }

  const handleChangeEdit = (e)=>{
    setProductEdit((prev) =>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmitEdit = async(e) =>{
    e.preventDefault()
    if(sendDisabled) return customAlert('Error', lang.admin.createProduct.messageAlert1, 'warning', 'Ok', ()=>{console.log('error')});

    try {
      await editProduct(productEdit, productEdit._id, token)
      .then(response => {customAlert(lang.admin.createProduct.success, lang.admin.editProduct.alertOne , 'success', 'Ok', ()=>{console.log(response)});setLoading(true); render()})
      .catch(error => {customAlert('Error', lang.admin.editProduct.alertTwo,'error', 'Ok', ()=>{console.log(error)})})
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(productEdit !== null){
      if(productEdit.category !== ''){
        setSendDisabled(false)
      }
    }
  },[productEdit]);

  return (
    <>
    <div>
      <div className='mb-3 d-flex flex-wrap justify-content-between'>
        <h2>{lang.admin.prodOpctwo}</h2>
        <form className={`d-flex`} role="search" onSubmit={handleSubmit}>
          <input type="search" className="form-control me-2 me-lg-0" placeholder={lang.Store.search} onChange={handleChange}/>
          <button className={`bgNav-${modeDL} butt butt-${modeDL} text-white`} type='submit'>{lang.Store.search}</button>
        </form>
      </div>
      <div className={style.contProd}>
        {
          productSearch !== null ? productSearch.map((prod, index)=>(<div className={`p-3 mt-2 rounded text-dark ${style.backCard}`} key={index}>
          <p><b>{lang.admin.editProduct.title} </b>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</p>
          <p><b>{lang.admin.editProduct.desc} </b>{lang.Languaje.lang === 'es' ? `${prod.descriptionEs.slice(0, 200)}...` : `${prod.descriptionEn.slice(0, 200)}...`}</p>
          <p><b>{lang.admin.editProduct.price} </b>{prod.price} $</p>
          <p><b>{lang.admin.editProduct.quantity} </b>{prod.quantity}</p>
          <p><b>{lang.admin.editProduct.category} </b>{prod.category}</p>
          <div><button className={`butt butt-${modeDL} text-white bgFootButt-${modeDL}`} onClick={()=>getProductId(prod._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">{lang.admin.editProduct.butt}</button></div>
        </div>)) :
          loading || products===null ? <Loader/> :
          products.map((prod, index)=>(<div className={`p-3 mt-2 rounded text-dark ${style.backCard}`} key={index}>
            <p><b>{lang.admin.editProduct.title} </b>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</p>
            <p><b>{lang.admin.editProduct.desc} </b>{lang.Languaje.lang === 'es' ? `${prod.descriptionEs.slice(0, 200)}...` : `${prod.descriptionEn.slice(0, 200)}...`}</p>
            <p><b>{lang.admin.editProduct.price} </b>{prod.price} $</p>
            <p><b>{lang.admin.editProduct.quantity} </b>{prod.quantity}</p>
            <p><b>{lang.admin.editProduct.category} </b>{prod.category}</p>
            <div><button className={`butt butt-${modeDL} text-white bgFootButt-${modeDL}`} onClick={()=>getProductId(prod._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">{lang.admin.editProduct.butt}</button></div>
          </div>))
        }
      </div>
    </div>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={modal}>
            
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className={`modal-content bg-${modeDL} text-${textDL}`}>
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Editar: {lang.Languaje.lang === 'es' ? productId.titleEs : productId.titleEn}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form className='mt-4' onSubmit={handleSubmitEdit}>
                      <div className="mb-3">
                        <label htmlFor="inputTitleEs" className="form-label">{lang.admin.createProduct.titleEs}</label>
                        <input type="text" onChange={handleChangeEdit} name='titleEs' className="form-control" id="inputTitleEs"  maxLength={65} aria-describedby="emailHelp" placeholder={productId.titleEs}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputTitleEn" className="form-label">{lang.admin.createProduct.titleEn}</label>
                        <input type="text" onChange={handleChangeEdit} name='titleEn' className="form-control" id="inputTitleEn"  maxLength={65} placeholder={productId.titleEn}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputDescriptionEs" className="form-label">{lang.admin.createProduct.descEs}</label>
                        <textarea className="form-control" onChange={handleChangeEdit} name='descriptionEs' id="inputDescriptionEs" rows="3" placeholder={`${productId.descriptionEs.slice(0, 15)}...`}></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputDescriptionEn" className="form-label">{lang.admin.createProduct.descEn}</label>
                        <textarea className="form-control" onChange={handleChangeEdit} name='descriptionEn' id="inputDescriptionEn" rows="3" placeholder={`${productId.descriptionEn.slice(0, 15)}...`}></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="inputPrice" className="form-label">{lang.admin.createProduct.price}</label>
                        <div className='d-flex align-items-center'>
                          <input type="number" onChange={handleChangeEdit} name='price' className={`form-control ${style.inputWidthTwo}`} id="inputPrice" placeholder={productId.price}/>
                          <h5 className='ms-2 mt-1'>$</h5>
                        </div>
                      </div>
                      <div className={`mb-3`}>
                      <label htmlFor="selectCategory" className="form-label">{lang.admin.createProduct.category}</label>
                        <select className={`form-select ${style.inputWidth}`} name='category' onChange={handleChangeEdit} defaultValue='' aria-label="Default select example" id='selectCategory'>
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
                        <input type="number" className={`form-control ${style.inputWidthTwo}`} name='quantity' onChange={handleChangeEdit} id="inputQuantity" placeholder={productId.quantity}/>
                      </div>
                      <button type="submit" className={sendDisabled ? 'buttDisabled' : `bgFootButt-${modeDL} butt-${modeDL} butt text-white`} disabled={sendDisabled ? true : false}>{lang.admin.prodOpctwo}</button>
                    </form>
                  </div>
                </div>
              </div>
          </div>
      
    
    </>
  )
}

export default EditProduct