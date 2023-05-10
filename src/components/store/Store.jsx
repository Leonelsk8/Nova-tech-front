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
  const {lang, modeDL, textDL, token} = props;
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
      <Landing modeDL={modeDL} lang={lang}/>
      <section className={`bg${modeDL} text position-relative sectOrigin`} style={{zIndex: 1}}>
        <Container fluid className='pt-5'>
          <Row>
            <Col className={`bgCardBan-${modeDL} text-${textDL} py-5`} xs={12} md={12} lg={12} >
              <h2 className='text-center mb-3'>{lang.Store.sectionOneTitle}</h2>
              <Row className='justify-content-center'>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img2} width={'100%'}></Image>
                    <p className='text-center mt-2'>{lang.Store.sectionOneDescOne}</p>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img1} width={'100%'}></Image>
                    <p className='text-center mt-2'>{lang.Store.sectionOneDescTwo}</p>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img3} width={'100%'}></Image>
                    <p className='text-center mt-2'>{lang.Store.sectionOneDescTree}</p>
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
                      <input type="search" className="form-control me-2 me-lg-0" placeholder={lang.Store.search} onChange={handleChange}/>
                      <button className={`bgNav-${modeDL} butt butt-${modeDL} text-white`} type='submit'>{lang.Store.search}</button>
                    </form>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={12} className='mt-2 mt-md-0'>
                  <div className={`pt-lg-3`}>
                    <h3 className="d-none d-lg-block mt-lg-4">{lang.Store.category}</h3>
                    <button className={`${style.buttCategory} d-lg-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><div className="d-flex justify-content-between"><h4>{lang.Store.category}</h4><p className='fs-7 pt-1'>▼</p></div></button>
                      
                    <div className="collapse d-lg-block" id="collapseExample">
                      <div className={``}>
                        <button className={modeDL === 'dark' ? `${style.buttAll} ${style.buttAlldark}` : `${style.buttAll} ${style.buttAlllight}`} onClick={()=>{setLoading(true); Allcategory();}}>{lang.Store.catTitleOne}</button>
                        <Dropdowns style={style} title={lang.Store.catTitleTwo} classD={'nada'} classDtwo={'nada'} itemIndex={0} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                        <Dropdowns style={style} title={lang.Store.catTitleTree} classD={'nada'} classDtwo={'d-none'} itemIndex={1} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                        <Dropdowns style={style} title={lang.Store.catTitleFor} classD={'nada'} classDtwo={'nada'} itemIndex={2} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                        <Dropdowns style={style} title={lang.Store.catTitleFive} classD={'nada'} classDtwo={'d-none'} itemIndex={3} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                        <Dropdowns style={style} title={lang.Store.catTitleSix} classD={'d-none'} classDtwo={'d-none'} itemIndex={4} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/> 
                        <Dropdowns style={style} title={lang.Store.catTitleSeven} classD={'nada'} classDtwo={'d-none'} itemIndex={5} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                        <Dropdowns style={style} title={lang.Store.catTitleHeight} classD={'nada'} classDtwo={'d-none'} itemIndex={6} categoryChange={setCategory} loadingChange={setLoading} modeDL={modeDL} lang={lang}/>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className='py-5 mt-5 d-none d-lg-block'>
                <img src={lang.Languaje.lang === 'es' ? gifEs : gifEn} className={style.publicidad} data-aos="fade-right"></img>
              </div>
            </Col>
            <Col xs={12} md={12} lg={9}>
              <Row>
                {
                  isLoading ? <Col xs={12} md={12} lg={12}><Loader/></Col> : dataProd.map((resp, index)=>(<Col xs={6} md={4} lg={3} key={index}  className='mt-4 px-1 px-md-2'><Card title={lang.Languaje.lang === 'es' ? resp.titleEs : resp.titleEn} price={resp.price} icon={resp.icon} id={resp._id} styles={style} modeDL={modeDL} textDL={textDL} token={token} lang={lang}/></Col>))
                  
                }
                {
                  isLoading === false && dataProd.length === 0 ? <div className='d-flex justify-content-center pt-5'><h1 className='pt-5'>{lang.Store.notresult}</h1></div> : <div></div>
                }
                {
                  isLoading ? <Col className="d-none"></Col> :
                  <Col xs={12} md={12} lg={12} className='mt-3'>
                    <div className='d-flex justify-content-center'>
                      <button className={pag <= 1 ? 'buttDisabled me-3' : `me-3 bgFootButt-${modeDL} butt-${modeDL} butt text-white`} onClick={()=>{setLoading(true); setPag(pag-1);}} disabled={pag<=1 ? true : false}>{lang.Store.buttPrev}</button>
                      <button className={dataProd.length < 12 ? 'buttDisabled' : `bgFootButt-${modeDL} butt-${modeDL} butt text-white`} onClick={()=>{setLoading(true); setPag(pag+1);}} disabled={dataProd.length < 12 ? true : false}>{lang.Store.buttNext}</button>
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
                  <p className='mt-3'>{lang.Store.panIconone}</p>
                </Col>
                <Col xs={6} md={4} lg={4} className="px-2 px-lg-5 text-center">
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="shoppingIcon" data-aos="zoom-in"></img>
                  <p className='mt-3'>{lang.Store.panIcontwo}</p>
                </Col>
                <Col xs={12} md={4} lg={4} className="mt-3 mt-md-0 px-2 px-lg-5 text-center">
                  <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="protectedIcon" data-aos="zoom-in"/>
                  <p className='mt-3'>{lang.Store.panIcontree}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <section className={`bgCardBan-${modeDL} my-5 pb-5 border-top border-bottom border-1 border-${textDL}`} id='sectionOfferts'>
          <Offerts style={style} modeDL={modeDL} textDL={textDL} lang={lang} token={token}/>
        </section>
        
        <Container className='pt-2 pb-5'>
          <Row className='justify-content-center mt-4' data-aos="fade-right">
            <Col xs={12} md={12} lg={5} className='p-1'>
              <img src={imgEndtwo} className={style.publicidad}></img>
            </Col>
            <Col xs={12} md={12} lg={7} className={`bgFootButt-${modeDL} p-4 text-white border border-1 border-white`}>
              <p>✔ {lang.Store.panelEndOneone}</p>
              <p>✔ {lang.Store.panelEndOnetwo}</p>
              <p>✔ {lang.Store.panelEndOnetree}</p>
              <p>✔ {lang.Store.panelEndOnefor}</p>
              <p>✔ {lang.Store.panelEndOnefive}</p>
            </Col>
          </Row>
          <Row className='justify-content-center flex-column-reverse flex-lg-row mt-4' data-aos="fade-left">
            <Col xs={12} md={12} lg={7} className={`bgFootButt-${modeDL} p-4 text-white border border-1 border-white`}>
              <p>✔ {lang.Store.panelEndTwoone}</p>
              <p>✔ {lang.Store.panelEndTwotwo}</p>
              <p>✔ {lang.Store.panelEndTwotree}</p>
              <p>✔ {lang.Store.panelEndTwofor}</p>
              <p>✔ {lang.Store.panelEndTwofive}</p>
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
              <p>✔ {lang.Store.panelEndTreeone}</p>
              <p>✔ {lang.Store.panelEndTreetwo}</p>
              <p>✔ {lang.Store.panelEndTreetree}</p>
              <p>✔ {lang.Store.panelEndTreefor}</p>
              <p>✔ {lang.Store.panelEndTreefive}</p>
            </Col>
          </Row>
        </Container>
      </section>
    
    </>
  )
}

export default Store