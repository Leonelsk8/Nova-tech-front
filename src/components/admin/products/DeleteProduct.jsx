import React, {useState ,useEffect} from 'react';
import { getAllProducts, deleteProduct} from '../../../API/Api';
import Loader from '../../loader/Loader';
import {customAlert, alertCancelConfirm} from '../../../assets/utils/alters';

const DeleteProduct = (props) => {
  const {style, textDL, modeDL, lang, token} = props;
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [productSearch, setProductSearch] = useState(null);

  useEffect(()=>{
    try {
      const resp = async()=>{
        await getAllProducts(token)
        .then((response)=>{setProducts(response.data); setLoading(false);})
        .catch((error)=>console.log(error))
      }
      resp();
    } catch (error) {
      console.log(error)
    }
  },[]);

  const render = async()=>{
    await getAllProducts(token)
    .then((response)=>{setProducts(response.data); setLoading(false); setProductSearch(null)})
    .catch((error)=>console.log(error))
  }

  const deleteProd = async(id)=>{
    alertCancelConfirm(lang.admin.deleteProduct.alertOne, lang.admin.deleteProduct.alertOneop, 'warning', lang.admin.deleteProduct.alertOneconf, lang.admin.deleteProduct.alertOnecancel, 
    async ()=>{await deleteProduct(id, token).then((resp)=>{customAlert(lang.admin.deleteProduct.alertTwo, lang.admin.deleteProduct.alertTwoop, 'success','ok',()=>{render()})}).catch((error)=>{console.log(error); setLoading(true); render();})}, 
    ()=>{return});
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

  return (
    <>
      <div>
        <div className='mb-3 d-flex flex-wrap justify-content-between'>
          <h2>{lang.admin.prodOpctree}</h2>
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
            <div><button className={`butt butt-${modeDL} text-white bgFootButt-${modeDL}`} onClick={()=>deleteProd(prod._id)}>{lang.admin.buttDelete}</button></div>
          </div>)) :
            loading || products===null ? <Loader/> :
            products.map((prod, index)=>(<div className={`p-3 mt-2 rounded text-dark ${style.backCard}`} key={index}>
              <p><b>{lang.admin.editProduct.title} </b>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</p>
              <p><b>{lang.admin.editProduct.desc} </b>{lang.Languaje.lang === 'es' ? `${prod.descriptionEs.slice(0, 200)}...` : `${prod.descriptionEn.slice(0, 200)}...`}</p>
              <p><b>{lang.admin.editProduct.price} </b>{prod.price} $</p>
              <p><b>{lang.admin.editProduct.quantity} </b>{prod.quantity}</p>
              <p><b>{lang.admin.editProduct.category} </b>{prod.category}</p>
              <div><button className={`butt butt-${modeDL} text-white bgFootButt-${modeDL}`} onClick={()=>deleteProd(prod._id)}>{lang.admin.buttDelete}</button></div>
            </div>))
          }
        </div>
    </div>
    </>
  )
}

export default DeleteProduct