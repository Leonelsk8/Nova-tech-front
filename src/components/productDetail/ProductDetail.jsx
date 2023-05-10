import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../loader/Loader';
import { getProductById  } from '../../API/Api';
import style from './productDetail.module.css';
import { Container,Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const ProductDetail = (props) => {
  const { modeDL, textDL, lang, token } = props;
  const [prod, setProd] = useState({});
  const [isLoading,setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
   
      const resp = async()=>{ 
      await getProductById(id, token)
      .then(response => {setProd(response.data); setIsLoading(true);})
      .catch(error => console.log(error))
    };
    resp();
  },[]);

    const [value, setValue] = useState(0);
    const min = 1;
    const max = prod.quantity;
  
    const handleIncrement = () => {
      if (value < max) {
        setValue(value + 1);
      }
    };
  
    const handleDecrement = () => {
      if (value > min) {
        setValue(value - 1);
      }
    };

  return (
    <>{
       isLoading ? <div className={` bg${modeDL} text-${textDL}`}>
       <Container fluid className='py-3 px-4'>
        <Row>
          <Col xs={12} md={12} lg={12} className={`bgFootButt-${modeDL} ${style.cards} py-5`}>
            <div className={'text-center text-white'}>
              <h1>{lang.detailProduct.title}</h1> 
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className='pt-2 pb-5'>
          <div className= "container shadow">
            <div className={`row ${style.cards} p-4 bgCardBan-${modeDL}`}>
              <div className="col-xs-12 col-lg-6">
                <h2>{lang.Languaje.lang === 'es' ? prod.titleEs : prod.titleEn}</h2>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner"> 
                    {prod.img.map((img, index) => (
                       <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} ${style.contentImg}`}>
                         <img src={img} className={style.imgCards} alt={prod.titleEs} />
                       </div>
                      ))}
                    </div>


                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>

                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>

                    <span className="visualy-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-xs-12 col-lg-6">
                <h2>{lang.detailProduct.desc}</h2>

                <p>{lang.Languaje.lang === 'es' ? prod.descriptionEs : prod.descriptionEn}{}</p>

                <div className="mt-5 text-start">
                  <h3>${prod.price} USD</h3>
                  <h4>{lang.detailProduct.rest} {prod.quantity} {lang.detailProduct.unid}</h4>
                </div>
                <div className="mt-5 text-center">
                    <small className='mx-2'>{lang.detailProduct.textSmall}</small><br /><br />
                    <button className={` text-white bgFootButt-${modeDL} butt-${modeDL} butt mx-2`} onClick={handleDecrement}>-</button>
                    <input type="number" value={value} min={min} max={max} />
                   <button className={` text-white bgFootButt-${modeDL} butt-${modeDL} butt mx-2`} onClick={handleIncrement}>+</button><br />
                  
                </div>
                <div className="m-3 text-center">
                  <button className= {`text-white bgFootButt-${modeDL} butt-${modeDL} butt  m-3 `} onClick={() => navigate(`/not-found`) }>{lang.detailProduct.buy}</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      
       </div> : <Loader/>
    }</>
  )
}

export default ProductDetail