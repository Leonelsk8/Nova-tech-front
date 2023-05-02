import React from 'react'
import {useParams} from 'react-router-dom';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';
import { getProductById  } from '../../API/Api';

const ProductDetail = () => {
  const [prod, setProd] = useState({});
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    const { id } = useParams();
    const resp = async()=>{ 
      await getProductById(id)
      .then(response => {setProd(response.data); setIsLoading(true);})
      .catch(error => console.log(error))
    };
    resp();
  },[]);

  return (
    <>
      {
        isLoading ? <div>{`product: ${prod.title}`}</div> : <Loader/>
      }
    </>
  )
}

export default ProductDetail