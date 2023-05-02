import React,{useEffect,useState} from 'react';
import {Container ,Col,Row, Image} from 'react-bootstrap';
import Card from './Cards';
import style from './store.module.css';
import img1 from '../../assets/img1Bann.jpg';
import img2 from '../../assets/img2Bann.jpg';
import img3 from '../../assets/img3Bann.jpg';
import { getProducts, getProductCategory, searchProd } from '../../API/Api';
import Loader from '../loader/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from '../landing/Landing';
import Dropdowns from './Dropdown';
import Offerts from './Offerts';
import gifEs from '../../assets/publiEs.gif';
import gifEn from '../../assets/publiEn.gif';
import imgEndone from '../../assets/imgEndone.jpg';
import imgEndtwo from '../../assets/imgEndtwo.jpg';
import imgEndtree from '../../assets/imgEndtree.jpg';

const Store = (props) => {
  const {lang, modeDL, textDL} = props;
  AOS.init();
  const [dataProd, setDataProd] = useState([]);
  const [pag, setPag] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState('none');
  const [search, setSearch] = useState(null);

  useEffect(()=>{
    const resp = async()=>{ 
      await getProducts(pag)
      .then(response => {setDataProd(response.data); setLoading(false);})
      .catch(error => console.log(error))
    };
    resp();
  },[pag]);

  const Allcategory = async ()=>{
    await getProducts(pag)
    .then(response => {setDataProd(response.data); setLoading(false);})
    .catch(error => console.log(error))
  };

  useEffect(()=>{
    const resp = async()=>{
      await getProductCategory(category)
      .then(response =>{setDataProd(response.data); setLoading(false)})
      .catch(error => {console.log(error)})
    };
    if(category !== 'none'){
      resp();
    }
  },[category])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(search.length > 0){
      setLoading(true)
      await searchProd(search.toLowerCase())
      .then(response => {setDataProd(response.data); setLoading(false);})
      .catch(error => console.log(error))
    }
  }

  const handleChange =(e) => {
    setSearch(e.target.value)
  };

  return (
    <>
      <Landing modeDL={modeDL}/>
      <section className={`bg${modeDL} text position-relative sectOrigin`} style={{zIndex: 1}}>
        <Container fluid className='pt-5'>
          <Row>
            <Col className={`bgCardBan-${modeDL} text-${textDL} py-5`} xs={12} md={12} lg={12} >
              <h2 className='text-center mb-3'>Todo lo que necesitas para vivir a gusto</h2>
              <Row className='justify-content-center'>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img2} width={'100%'}></Image>
                    <p className='text-center mt-2'>Ofrecemos electrodomésticos con diseños elegantes y modernos que aportan una apariencia sofisticada a tu casa o negocio.</p>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img1} width={'100%'}></Image>
                    <p className='text-center mt-2'>Ofrecemos las mejores marcas que garantizan la calidad y la confiabilidad necesaria.</p>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img3} width={'100%'}></Image>
                    <p className='text-center mt-2'>Tenemos una amplia selección de electrodomésticos de última generación para satisfacer todas tus necesidades.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container fluid className="pb-5 pt-4">
          <Row>
            <Col className={`bgFootButt-${modeDL} text-white py-4 mt-4`} md={12} lg={3}>
              <Row className={`${style.colCatSearch}`}>
                <Col xs={12} md={6} lg={12}>
                  <div className='pt-lg-3'>
                    <h3 className='d-none d-lg-block'>{lang.Store.search}</h3>
                    <form className={`${style.formSearch} mb-lg-3 d-flex`} role="search" onSubmit={handleSubmit}>
                      <input type="search" className="form-control me-2 me-lg-0" placeholder="Search" onChange={handleChange}/>
                      <button className={`bgNav-${modeDL} butt butt-${modeDL} text-white`} type='submit'>Buscar</button>
                    </form>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={12} className='mt-2 mt-md-0'>
                  <div className={`pt-lg-3`}>
                    <h3 className="d-none d-lg-block mt-lg-4">{lang.Store.category}</h3>
                    <button className={`${style.buttCategory} d-lg-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><div className="d-flex justify-content-between"><h4>{lang.Store.category}</h4><p className='fs-7 pt-1'>▼</p></div></button>
                      
                    <div className="collapse d-lg-block" id="collapseExample">
                      <div className={``}>
                        <button className={modeDL === 'dark' ? `${style.buttAll} ${style.buttAlldark}` : `${style.buttAll} ${style.buttAlllight}`} onClick={()=>{setLoading(true); Allcategory();}}>Todos</button>
                        <Dropdowns style={style} title={'Computadoras'} classD={'nada'} classDtwo={'nada'} itemIndex={0} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                        <Dropdowns style={style} title={'TV'} classD={'nada'} classDtwo={'d-none'} itemIndex={1} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                        <Dropdowns style={style} title={'Celulares'} classD={'nada'} classDtwo={'nada'} itemIndex={2} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                        <Dropdowns style={style} title={'Audio'} classD={'nada'} classDtwo={'d-none'} itemIndex={3} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                        <Dropdowns style={style} title={'Heladeras'} classD={'d-none'} classDtwo={'d-none'} itemIndex={4} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/> 
                        <Dropdowns style={style} title={'Climatización'} classD={'nada'} classDtwo={'d-none'} itemIndex={5} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                        <Dropdowns style={style} title={'Tablets'} classD={'nada'} classDtwo={'d-none'} itemIndex={6} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL}/>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className='py-5 mt-5 d-none d-lg-block'>
                <img src={gifEs} className={style.publicidad} data-aos="fade-right"></img>
              </div>
            </Col>
            <Col xs={12} md={12} lg={9}>
              <Row>
                {
                  isLoading ? <Col xs={12} md={12} lg={12}><Loader/></Col> : dataProd.map((resp, index)=>(<Col xs={6} md={4} lg={3} key={index}  className='mt-4 px-1 px-md-2'><Card title={resp.title} price={resp.price} icon={resp.icon} id={resp._id} styles={style} modeDL={modeDL} textDL={textDL}/></Col>))
                  
                }
                {
                  isLoading === false && dataProd.length === 0 ? <div className='d-flex justify-content-center pt-5'><h1 className='pt-5'>No hay resultados</h1></div> : <div></div>
                }
                {
                  isLoading ? <Col className="d-none"></Col> :
                  <Col xs={12} md={12} lg={12} className='mt-3'>
                    <div className='d-flex justify-content-center'>
                      <button className={pag <= 1 ? 'buttDisabled me-3' : `me-3 bgFootButt-${modeDL} butt-${modeDL} butt text-white`} onClick={()=>{setLoading(true); setPag(pag-1);}} disabled={pag<=1 ? true : false}>Anterior</button>
                      <button className={dataProd.length < 12 ? 'buttDisabled' : `bgFootButt-${modeDL} butt-${modeDL} butt text-white`} onClick={()=>{setLoading(true); setPag(pag+1);}} disabled={dataProd.length < 12 ? true : false}>Siguiente</button>
                    </div>
                  </Col>

                }
              </Row>
            </Col>
          </Row>
        </Container>
        
        <Container fluid className='my-5'>
          <Row>
            <Col xs={12} md={12} lg={12} className={`bgCardBan-${modeDL} text-${textDL} py-5 border-top border-bottom border-1 border-${textDL}`}>
              <Row className='justify-content-center align-items-center'>
                <Col xs={6} md={4} lg={4} className="px-2 px-lg-5 text-center">
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="paymentIcon" data-aos="zoom-in"></img>
                  <p className='mt-3'>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                </Col>
                <Col xs={6} md={4} lg={4} className="px-2 px-lg-5 text-center">
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="shoppingIcon" data-aos="zoom-in"></img>
                  <p className='mt-3'>Solo por estar registrado en Nova Tech tenés envíos gratis en miles de productos.</p>
                </Col>
                <Col xs={12} md={4} lg={4} className="mt-3 mt-md-0 px-2 px-lg-5 text-center">
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="protectedIcon" data-aos="zoom-in"/>
                  <p className='mt-3'>¿No te gusta? ¡Devolvelo! En Nova Tech, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <section className={`bgCardBan-${modeDL} my-5 pb-5 border-top border-bottom border-1 border-${textDL}`} id='sectionOfferts'>
          <Offerts style={style} modeDL={modeDL} textDL={textDL}/>
        </section>
        
        <Container className='pt-2 pb-5'>
          <Row className='justify-content-center mt-4' data-aos="fade-right">
            <Col xs={12} md={12} lg={5} className='p-1'>
              <img src={imgEndtwo} className={style.publicidad}></img>
            </Col>
            <Col xs={12} md={12} lg={7} className={`bgFootButt-${modeDL} p-4 text-white border border-1 border-white`}>
              <p>✔ La mejor selección de productos en línea.</p>
              <p>✔ Compra desde la comodidad de tu hogar.</p>
              <p>✔ Encuentra todo lo que necesitas en un solo lugar.</p>
              <p>✔ Calidad y confianza en cada compra.</p>
              <p>✔ Envío gratis en compras superiores a $50000.</p>
            </Col>
          </Row>
          <Row className='justify-content-center flex-column-reverse flex-lg-row mt-4' data-aos="fade-left">
            <Col xs={12} md={12} lg={7} className={`bgFootButt-${modeDL} p-4 text-white border border-1 border-white`}>
              <p>✔ Precios competitivos en todos nuestros productos.</p>
              <p>✔ ¡No esperes más para tener lo que necesitas!</p>
              <p>✔ Descubre nuestras ofertas especiales mensuales.</p>
              <p>✔ Elige entre una amplia variedad de productos.</p>
              <p>✔ Haz tus compras en línea con seguridad y tranquilidad.</p>
            </Col>
            <Col xs={12} md={12} lg={5} className='p-1'>
              <img src={imgEndone} className={style.publicidad}></img>
            </Col>
          </Row>
          <Row className='justify-content-center mt-4' data-aos="fade-right">
            <Col xs={12} md={12} lg={5} className='p-1'>
             <img src={imgEndtree} className={style.publicidad}></img>
            </Col>
            <Col xs={12} md={12} lg={7} className={`bgFootButt-${modeDL} p-4 text-white border border-1 border-white`}>
              <p>✔ Atención al cliente excepcional.</p>
              <p>✔ Todas las marcas que amas en un solo lugar.</p>
              <p>✔ Compra ahora y paga después con nuestra opción de pago aplazado.</p>
              <p>✔ Productos de alta calidad a precios bajos.</p>
              <p>✔ Más de 10 años de experiencia en el comercio electrónico.</p>
            </Col>
          </Row>
        </Container>
      </section>
    
    </>
  )
}

export default Store