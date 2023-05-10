import React, {useState, useEffect} from 'react';
import {Container ,Col,Row} from 'react-bootstrap';
import Cards from './Cards';
import { getOfferts } from '../../API/Api';
import Loader from '../loader/Loader';

const Offerts = (props) => {
  const {style, modeDL, textDL, lang, token} = props;
  const [Prod, setProd] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const resp = async()=>{ 
      await getOfferts()
      .then(response => {setProd(response.data); setLoading(false);})
      .catch(error => console.log(error))
    };
    resp();
  },[]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={12} className={`bgFootButt-${modeDL} py-5`}>
            <div className={'text-center text-white'}>
              <h1>Aprovecha las ofertas de este mes!!</h1>
            </div>
          </Col>
        </Row>
      </Container>
      
      <section className='position-relative'>
        <section className={`${style.bgSlime} bgFootButt-${modeDL}`}></section>
        <Container >
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Row className={'justify-content-center'}>
                {
                  isLoading ? <Col xs={12} md={12} lg={12}><Loader/></Col> : Prod.map((resp, index)=>(<Col xs={6} md={4} lg={3} key={index}  className='mt-4 px-1 px-md-2'><Cards title={lang.Languaje.lang === 'es' ? resp.titleEs : resp.titleEn} price={resp.price} icon={resp.icon} id={resp._id} offert={resp.offert} styles={style} modeDL={modeDL} textDL={textDL} token={token} lang={lang}/></Col>))
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Offerts