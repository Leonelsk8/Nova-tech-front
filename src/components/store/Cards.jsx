import React from 'react'
import {Card} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from 'react-router-dom';

const Cards = (props) => {
  const style = props.styles;
  const { title, price, icon, id, offert } = props;
  const priceOff = (price * 50)/100;
  AOS.init();
  const navigate = useNavigate();
  return (
    <Card className={`${style.cards}`} data-aos="zoom-in">
      <div className={style.contentImg}>
        <Card.Img variant="top" src={icon} className={style.imgCards} />
      </div>
      <Card.Body className="bgCardBan-Light d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <div>
          {
            offert === true ? <div><p className='text-danger'>{`Precio: `}<s>{`$${price}`}</s><b> -50%</b></p><p className='text-success'>{`Precio: $${priceOff}`}</p></div> : <p className='text-success'>{`Precio: $${price}`}</p>
          }
        </div>
        <div className='d-flex justify-content-between'>
          <button className={style.buttCart}><i className={`bi bi-cart-plus ${style.cartPlus}`}></i></button>
          <button className="text-white bgFootButt-Light butt" onClick={() => navigate(`/prod/${id}`)}>Comprar</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Cards