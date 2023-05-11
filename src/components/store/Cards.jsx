import { addtoCart } from '../../API/Api';
import {Card} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from 'react-router-dom';
import { customAlert, alertTime } from '../../assets/utils/alters';

const Cards = (props) => {
  const style = props.styles;
  const { title, price, icon, id, offert, modeDL, textDL, lang, token } = props;
  const priceOff = (price * 50)/100;
  AOS.init();
  const navigate = useNavigate();

  const addCart = async(idProduct, accessToken)=>{
    const idUser = localStorage.getItem('idUser-novatech');
    if(token === null || idUser === null){
      customAlert('Inicia sesión', 'No puedes agregar productos si aún no iniciaste sesión', 'warning', 'Ok', ()=>{});
      return;
    }
    await addtoCart(idUser, idProduct, accessToken)
    .then((resp)=>{alertTime('Agregado', 'success'); console.log(resp.data)})
    .catch((error)=>{alertTime('No pudo agregarse', 'error'); console.log(error)})
  }

  return (
    <Card className={`${style.cards}`} data-aos="zoom-in">
      <div className={style.contentImg}>
        <Card.Img variant="top" src={icon} className={style.imgCards} />
      </div>
      <Card.Body className={`bgCardBan-${modeDL} text-${textDL} d-flex flex-column justify-content-between`}>
        <Card.Title>{title}</Card.Title>
        <div>
          {
            offert === true ? <div><p className='text-danger'>{`${lang.Store.price} `}<s>{`$${price}`}</s><b> -50%</b></p><p className='text-success'>{`${lang.Store.price} $${priceOff}`}</p></div> : <p className='text-success'>{`${lang.Store.price} $${price}`}</p>
          }
        </div>
        <div className='d-flex justify-content-between'>
          <button className={modeDL === 'dark' ? `${style.buttCartdark} ${style.buttCart}` : `${style.buttCartlight} ${style.buttCart}`} onClick={()=>addCart(id, token)}><i className={`bi bi-cart-plus ${style.cartPlus}`}></i></button>
          <button className={`text-white bgFootButt-${modeDL} butt-${modeDL} butt`} onClick={() => navigate(`/prod/${id}`)}>{lang.Store.buttBuy}</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Cards