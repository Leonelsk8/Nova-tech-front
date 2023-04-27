import React from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import land1 from '../../assets/landing1.jpg';
import land2 from '../../assets/landing2.jpg'; 
import land3 from '../../assets/landing3.jpg'; 
import style from './landing.module.css'; 

const landing = () => {
  return (
    <section className='sticky-top' style={{ zIndex: -1}}>
      <section>
        <Carousel controls={false} interval={2000}>
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
        <div className={style.backBan}></div>
      </section>
    </section>
  )
}

export default landing