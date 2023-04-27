import React from 'react'
import {Card} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = (props) => {
  const style = props.styles;
  const { title, price, icon } = props;
  AOS.init();
  return (
    <Card className={`${style.cards}`} data-aos="zoom-in">
      <Card.Img variant="top" src={icon} />
      <Card.Body className="bgCardBan-Light d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Precio: $${price}`}
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <button className={style.buttCart}><i className={`bi bi-cart-plus ${style.cartPlus}`}></i></button>
          <button className="text-white bgFootButt-Light butt">Comprar</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Cards