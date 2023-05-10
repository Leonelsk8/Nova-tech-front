import React,{useState, useEffect} from 'react';
import {getCartItems, getProductById} from '../../API/Api';
import Loader from '../loader/Loader';
import { Link } from 'react-router-dom';

const shopCart = (props) => {
  const {modeDL, textDL, lang, token, setCartOn,style} = props;
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState([]);
  const [total, setTotal] = useState(null);

  const Sum = (productsuma)=>{
    if(productsuma.offert){
      return ((productsuma.price*50)/100) * productsuma.quantity;
    }else{
      return (productsuma.price * productsuma.quantity)
    }
  }

  useEffect(()=>{
    const idUser = localStorage.getItem('idUser-novatech');
    const resp = async()=>{
      try {
        const response = await getCartItems(idUser, token);
        setProducts(response.data);
        const newProductsInfo = [];
        let sumPrice = 0;
        for (const product of response.data) {
          const productInfo = await getProductById(product.id, token);
          const productWithQuantity = {...productInfo.data, quantity: product.quantity};
          newProductsInfo.push(productWithQuantity);
          sumPrice = sumPrice + Sum(productWithQuantity)
        }
        setProductsInfo(newProductsInfo);
        setLoading(false);
        setTotal(sumPrice);
      } catch (error) {
        console.log(error);
      }
    }
    resp();
  }, [token])

  return (
    <div className='text-white'>
      {
        isLoading ? <Loader/> :
        productsInfo.map((product, index)=>(
          <div key={index} className='d-flex justify-content-between mb-4'>
            <div className='d-flex'>
              <div className={`${style.imgCart} d-flex justify-content-center me-2`}>
                <img src={product.icon} className={`${style.imgshop}`}></img>
              </div>
              <div>
                <h6>{lang.Languaje.lang === 'es' ? product.titleEs : product.titleEn}</h6>
                <p className='mt-4'>{lang.admin.editProduct.quantity} <b>{product.quantity}</b></p>
              </div>
            </div>
            
            <p><b>{product.offert ? ((product.price*50)/100)* product.quantity : (product.price * product.quantity)} $</b></p>
          </div>
        ))
      }
      <div className='text-end'>
        <p><b>Total: {total} $</b></p>
      </div>
      <div className='d-flex justify-content-between'>
        <button onClick={()=>{setCartOn(0)}} className={`butt butt-${modeDL} bgFootButt-${modeDL} text-white text-decoration-none px-3`}>{lang.Cartshop.close}</button>
        <Link onClick={()=>{setCartOn(0)}} className={`butt butt-${modeDL} bgFootButt-${modeDL} text-white text-decoration-none px-5`} to={'/not-found'}>{lang.Cartshop.paid}</Link>
      </div>
    </div>
  )
}

export default shopCart