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

const Store = (props) => {
  const lang = props.lang;
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
      <Landing/>
      <section className='bg-Light position-relative' style={{zIndex: 1}}>
        <Container fluid className='pt-5'>
          <Row>
            <Col className='bgCardBan-Light py-5' lg={12} >
              <h2 className='text-center mb-3'>Todo lo que necesitas para vivir a gusto</h2>
              <Row className='justify-content-center'>
                <Col lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img2} width={'100%'}></Image>
                    <p className='text-center mt-2'>Ofrecemos electrodomésticos con diseños elegantes y modernos que aportan una apariencia sofisticada a tu casa o negocio.</p>
                  </div>
                </Col>
                <Col lg={3} data-aos="fade-down">
                  <div>
                    <Image src={img1} width={'100%'}></Image>
                    <p className='text-center mt-2'>Ofrecemos las mejores marcas que garantizan la calidad y la confiabilidad necesaria.</p>
                  </div>
                </Col>
                <Col lg={3} data-aos="fade-down">
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
            <Col className={`bgFootButt-Light text-white py-4 mt-4`} lg={3}>
              <div className='pt-3'>
                <h3>{lang.Store.search}</h3>
                <form className="mb-3 d-flex" role="search" onSubmit={handleSubmit}>
                  <input type="search" className="form-control" placeholder="Search" onChange={handleChange}/>
                  <button className='bgNav-Light butt text-white' type='submit'>Buscar</button>
                </form>
              </div>
              <div className='pt-3'>
                <h3 className="mt-4">{lang.Store.category}</h3>
                <div>
                  <button className={style.buttAll} onClick={()=>{setLoading(true); Allcategory();}}>Todos</button>
                  <Dropdowns style={style} title={'Computadoras'} classD={'nada'} classDtwo={'nada'} itemIndex={0} categoryChange={setCategory} loadingChange={setLoading}/>
                  <Dropdowns style={style} title={'TV'} classD={'nada'} classDtwo={'d-none'} itemIndex={1} categoryChange={setCategory} loadingChange={setLoading}/>
                  <Dropdowns style={style} title={'Celulares'} classD={'nada'} classDtwo={'nada'} itemIndex={2} categoryChange={setCategory} loadingChange={setLoading}/>
                  <Dropdowns style={style} title={'Audio'} classD={'nada'} classDtwo={'d-none'} itemIndex={3} categoryChange={setCategory} loadingChange={setLoading}/>
                  <Dropdowns style={style} title={'Heladeras'} classD={'d-none'} classDtwo={'d-none'} itemIndex={4} categoryChange={setCategory} loadingChange={setLoading}/> 
                  <Dropdowns style={style} title={'Climatización'} classD={'nada'} classDtwo={'d-none'} itemIndex={5} categoryChange={setCategory} loadingChange={setLoading}/>
                  <Dropdowns style={style} title={'Tablets'} classD={'nada'} classDtwo={'d-none'} itemIndex={6} categoryChange={setCategory} loadingChange={setLoading}/>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                {
                  isLoading ? <Col lg={12}><Loader/></Col> : dataProd.map((resp, index)=>(<Col lg={3} key={index}  className='mt-4'><Card title={resp.title} price={resp.price} icon={resp.icon} id={resp._id} styles={style}/></Col>))
                  
                }
                {
                  isLoading === false && dataProd.length === 0 ? <div className='d-flex justify-content-center pt-5'><h1 className='pt-5'>No hay resultados</h1></div> : <div></div>
                }
                {
                  isLoading ? <Col lg={12}></Col> :
                  <Col lg={12} className='mt-3'>
                    <div className='d-flex justify-content-center'>
                      <button className={pag <= 1 ? 'buttDisabled me-3' : 'me-3 bgFootButt-Light butt text-white'} onClick={()=>{setLoading(true); setPag(pag-1);}} disabled={pag<=1 ? true : false}>Anterior</button>
                      <button className={dataProd.length < 12 ? 'buttDisabled' : 'bgFootButt-Light butt text-white'} onClick={()=>{setLoading(true); setPag(pag+1);}} disabled={dataProd.length < 12 ? true : false}>Siguiente</button>
                    </div>
                  </Col>

                }
              </Row>
            </Col>
          </Row>
        </Container>

      </section>
    
    </>
  )
}

export default Store