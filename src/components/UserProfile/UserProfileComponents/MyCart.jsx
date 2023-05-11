/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartItems, getProductById } from '../../../API/Api';
import Loader from '../../loader/Loader';
import style from '../../navbar/navbar.module.css';

const ShopCart = (props) => {
  const { modeDL, textDL, lang, token, setCartOn } = props;
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState([]);
  const [total, setTotal] = useState(null);

  const calculateTotal = (product) => {
    if (product.offert) {
      return ((product.price * 50) / 100) * product.quantity;
    } else {
      return product.price * product.quantity;
    }
  };

  useEffect(() => {
    const idUser = localStorage.getItem('idUser-novatech');
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems(idUser, token);
        setProducts(response.data);

        const newProductsInfo = [];
        let sumPrice = 0;

        for (const product of response.data) {
          const productInfo = await getProductById(product.id, token);
          const productWithQuantity = {
            ...productInfo.data,
            quantity: product.quantity,
          };
          newProductsInfo.push(productWithQuantity);
          sumPrice += calculateTotal(productWithQuantity);
        }

        setProductsInfo(newProductsInfo);
        setTotal(sumPrice);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, [token]);

  return (
    <div className={`bg-${modeDL} text-${textDL} p-3`}>
      {isLoading ? (
        <Loader />
      ) : (
        productsInfo.map((product, index) => (
          <div key={index} className='mb-4 pb-3 border-bottom'>
            <div className='d-flex justify-content-between'>
              <div
                className={`${style.imgCart} d-none d-md-flex justify-content-center me-2 col-3`}
              >
                <img
                  src={product.icon}
                  className={`${style.imgshop}`}
                  alt='Product'
                />
              </div>
              <div className=' col-6'>
                <h6>
                  {lang.Languaje.lang === 'es'
                    ? product.titleEs
                    : product.titleEn}
                </h6>
                <p className='mt-4 col-3'>
                  {lang.admin.editProduct.quantity} <b>{product.quantity}</b>
                </p>
              </div>
              <span className='fw-bold px-2'>
                ${calculateTotal(product)?.toLocaleString('es-ES')}
              </span>
            </div>
          </div>
        ))
      )}
      {isLoading ? (
        <br />
      ) : (
        <div className='d-flex justify-content-end align-items-center gap-4'>
          <span className='fw-bold fs-5 py-3 align-content-center'>
            Total: ${total?.toLocaleString('es-ES')}
          </span>
          <Link
            onClick={() => setCartOn(0)}
            className={`butt butt-${modeDL} bgFootButt-${modeDL} text-white text-decoration-none px-4`}
            to='/not-found'
          >
            {lang.Cartshop.paid}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
