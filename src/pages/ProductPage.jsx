
import ProductDetail from '../components/productDetail/ProductDetail';

const ProductPage = (props) => {
  const { modeDL, textDL, lang } = props; 
  return (
    <ProductDetail  modeDL={modeDL} textDL={textDL} lang={lang}/>
    // // <div><h1>Hola mundo</h1></div>
  )
}

export default ProductPage