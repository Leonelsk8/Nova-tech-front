import axios from 'axios'; 
import {endpointProduct , endpointUsers} from './Endpoints';

const DBURL = import.meta.env.VITE_DB_URL;

export const getProducts = async()=>{
  try {
    const response = await axios.get(`${DBURL}${endpointProduct.get}`)
    return response
  } catch (error) {
    console.log(error);
  }
}