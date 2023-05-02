import React, {useState, useEffect} from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import land1 from '../../assets/landing1.jpg';
import land2 from '../../assets/landing2.jpg'; 
import land3 from '../../assets/landing3.jpg'; 
import style from './landing.module.css'; 
import 'animate.css';
import { Link } from 'react-scroll';

const landing = () => {

  const [zIndexvalue, setZIndex] = useState(0);
  const [difuminated, setDifumi] = useState(0);
  const [interval, setInterval] = useState(2000)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setZIndex(-1);
        setDifumi(1);
        if(window.scrollY >= 500){
          setInterval(null);
        }else{
          setInterval(2000);
        }
      } else {
        setZIndex(0);
        setDifumi(0);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`sticky-top`} style={{ zIndex: zIndexvalue}}>
      <section className="animate__animated animate__fadeIn">
        <Carousel controls={false} interval={interval}>
          <Carousel.Item>
            <img className="d-block w-100" src={land1} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={land2} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={land3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className={`${style.textXS} text-center position-absolute d-md-none`}><h2>¡¡Aprovecha las ofertas mensuales!!</h2></div>
        <div className={style.backBan}>

          <Row className={`${style.rowLand}`}>
            <Col xs={12} md={6} lg={5} className={`${style.cardLand} animate__animated animate__fadeInLeft mt-3 mt-md-0 py-4 py-md-0`}>
              <div className='text-center text-white px-md-3 pt-md-1 p-lg-4'>
                <h2 className='d-none d-md-block'>¡¡Aprovecha las ofertas mensuales!!</h2>
                <p className='fs-8 '>En Nova Tech no te pierdas nuestras ofertas mensuales! Cada mes, ofrecemos un descuento increible del 50% en una amplia selección de productos. Todos los meses seleccionamos 8 productos diferentes para esta gran oferta.</p>
              </div>
              <div>
                <Link to="sectionOfferts" smooth={true} duration={500} className={style.butt}>
                  Ver ofertas
                </Link>
              </div>
            </Col>
            <Col md={6} lg={7} className='d-none d-md-block'>
              <Row className={`${style.rowLand}`} >
                <Col md={12} lg={12} className='ps-5 d-flex align-items-center animate__animated animate__bounceIn'>
                  <div className={style.circles}><h1>50%</h1><p>OFF</p></div>
                </Col>
                <Col md={12} lg={12} className='d-flex align-items-center justify-content-end pe-5 animate__animated animate__bounceIn'>
                  <div className={style.circles}><h4>8 productos</h4></div>
                </Col>
                <Col md={12} lg={12} className='ps-5 d-flex align-items-center animate__animated animate__bounceIn'>
                  <div className={style.circles}><h4>Mensuales</h4></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {
          difuminated === 1 ? <div className={`${style.backBantwo} animate__animated animate__fadeIn`}></div>  : <div className='d-none'></div>
        }
      </section>
    </section>
  )
}

export default landing