import React,{useState,useEffect} from 'react';
import { getOfferts, restartOfferts, searchProd, offertProd } from '../../../API/Api';
import Loader from '../../loader/Loader';
import {Card} from 'react-bootstrap';
import AOS from 'aos';
import { customAlert } from '../../../assets/utils/alters';

const ModifyOfferts = (props) => {
  const {textDL, modeDL, lang, style,token} = props;
  const [prodOfferts, setProdOfferts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [prodSearch, setProdSearch] = useState(null);
  const [loadingTwo, setLoadingTwo] = useState(false);
  AOS.init();
  useEffect(()=>{
    const resp = async()=>{
      await getOfferts()
      .then((resp)=>{setProdOfferts(resp.data); setLoading(false)})
      .catch((error)=>{console.log(error)})
    }
    resp()
  },[prodOfferts])

  const offertRestart = async ()=>{
    if (prodOfferts.length === 0){
      customAlert('Error', lang.admin.offerProd.alertTwo, 'warning', 'ok', ()=>{})
    }else{
      await restartOfferts(token)
      .then((resp)=>{console.log(resp.data); setProdOfferts([])})
      .catch((error)=>console.log(error));
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setProdSearch(null);
    setLoadingTwo(true)
    if(search !== ''){
      await searchProd(search)
      .then((resp)=>{setProdSearch(resp.data); setLoadingTwo(false);})
      .catch((error)=>console.log(error))
    }
    
  }

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const sendOffert = async (id)=>{
    if(prodOfferts.length < 8){
      await offertProd(id, token)
      .then((resp)=>{setProdOfferts([...prodOfferts, resp.data]); console.log(resp.data)})
      .catch((error)=>console.log(error))
    }else{
      customAlert('Error', lang.admin.offerProd.alertOne , 'warning', 'ok', ()=>{})
    }
  }

  return (
    <>
    <div>
      <div className='mb-3 d-flex flex-wrap justify-content-between'>
        <h2>{lang.admin.offerProd.title}</h2>
        <button className={`butt butt-${modeDL} text-white bgFootButt-${modeDL}`} onClick={()=>offertRestart()}>{lang.admin.offerProd.butt}</button>
      </div>
    </div>
    <div className={`row mb-3 py-3 bgFootButt-${modeDL} justify-content-center rounded border border-1 border-dark`}>
      {
        loading ? <Loader/> : prodOfferts.length === 0 ? <div className='text-white d-flex justify-content-center'>{lang.admin.offerProd.noOffert}</div> : prodOfferts.map((prod, index)=>(
          <div key={index} className={`p-0 p-md-3 col-6 col-md-5 col-lg-3 mb-4`}>
            <Card data-aos="zoom-in">
              <div className={style.contentImg}>
                <Card.Img variant="top" className={style.imgCards} src={prod.icon}/>
              </div>
              <div className={style.prices}><p>{`${lang.Store.price} `}<s>{`$${prod.price}`}</s><b> -50%</b></p><p>{`${lang.Store.price} $${(prod.price * 50) /100}`}</p></div>
            </Card>
            <div className={`text-white p-3`}>
              <p>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</p>
            </div>
          </div>
        ))
      }
    </div>

    <div className='mt-5'>
      <h2>{lang.admin.offerProd.add}</h2>
      <div className='mt-3'>
        <div>
          <form className={`d-flex`} role="search" onSubmit={handleSubmit}>
            <input type="search" className="form-control me-2 me-lg-0" placeholder={lang.Store.search} onChange={handleChange}/>
            <button className={`bgNav-${modeDL} butt butt-${modeDL} text-white`} type='submit'>{lang.Store.search}</button>
          </form>
          {
            prodSearch !== null ? prodSearch.length !== 0 ? prodSearch.map((prod, index)=>(
            <div key={index}>
              <button className={style.buttOffert} onClick={()=>sendOffert(prod._id)}>
              <Card className='animate__animated animate__zoomIn'>
                <div className='row'> 
                  <div className='col-4 col-md-2'>
                    <div className={`${style.contentImgsearch}`}>
                      <Card.Img variant="top" className={style.imgCards} src={prod.icon}/>
                    </div>
                  </div>
                  <div className='col-8 col-md-10'>
                    <Card.Body>
                      <Card.Title>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</Card.Title>
                      <Card.Text>
                        <b>{lang.admin.editProduct.price}</b> {prod.price}$
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
              <div className={style.bacck}></div>
              </button>
          </div>)) : <div className='text-center pt-4'><h5>{lang.admin.notResult}</h5></div> : loadingTwo ? <Loader/> : <div></div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default ModifyOfferts