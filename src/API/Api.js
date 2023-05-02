import axios from 'axios'; 
import {endpointProduct , endpointUsers} from './Endpoints';

const DBURL = import.meta.env.VITE_DB_URL;

// products

export const getProducts = async(pag)=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.get}/${pag}`);
  } catch (error) {
    console.log(error);
  }
}

export const getOfferts = async()=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.getOfferts}`);
  } catch (error) {
    console.log(error);
  }
}


export const getProductCategory = async(category)=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.getCate}/${category}`);
  } catch (error) {
    console.log(error);
  }
}

export const searchProd = async(title)=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.searchProd}/${title}`);
  } catch (error) {
    console.log(error);
  }
}

export const getAllProducts = async()=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.getAll}`,{
      headers: {
        "access-token": "token"
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export const getProductById = async(id)=>{
  try {
    return await axios.get(`${DBURL}${endpointProduct.getId}/${id}`, {
      headers: {
        "access-token": "token"
      }
    });
  } catch (error) {
    console.log(error);
  }
}

//users