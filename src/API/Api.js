import axios from 'axios';
import { endpointProduct, endpointUsers } from './Endpoints';

//import { customAlert } from '../assets/utils/alters';
// import { useNavigate } from 'react-router-dom';

const DBURL = import.meta.env.VITE_DB_URL;

// products

export const getProducts = async (pag) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.get}/${pag}`);
  } catch (error) {
    console.log(error);
  }
};

export const getOfferts = async () => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getOfferts}`);
  } catch (error) {
    console.log(error);
  }
};

export const getProductCategory = async (category) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getCate}/${category}`);
  } catch (error) {
    console.log(error);
  }
};

export const searchProd = async (title) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.searchProd}/${title}`);
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (accessToken) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getAll}`, {
      headers: {
        'access-token': accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id, accessToken) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getId}/${id}`, {
      headers: {
        'access-token': accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async(productData)=>{
  try {
    return await axios.post(`${DBURL}${endpointProduct.create}`, productData);
  } catch (error) {
    console.log(error);
  }
}

export const uploadImage = async(formImage)=>{
  try {
    return await axios.post(`${DBURL}${endpointProduct.uploadImage}`, formImage);
  } catch (error) {
    console.log(error);
  }
}

export const uploadImagess = async (formImagess)=>{
  try {
    return await axios.post(`${DBURL}${endpointProduct.uploadImagess}`, formImagess, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
}

export const editProduct = async (productEdit, id, accessToken)=>{
  try {
    return await axios.patch(`${DBURL}${endpointProduct.edit}/${id}`, productEdit,{
      headers: { 
        'access-token': accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = async (id, accessToken) =>{
  try {
    return await axios.delete(`${DBURL}${endpointProduct.delete}/${id}`,{
      'access-token': accessToken,
    });
  } catch (error) {
    console.log(error);
  }
}

export const restartOfferts = async(accessToken)=>{
  try {
    return await axios.patch(`${DBURL}${endpointProduct.restartOffert}`,{title: 'title'},{
      headers: { 'access-token': accessToken},
    });
  } catch (error) {
    console.log(error);
  }
}

export const offertProd = async(id, accessToken)=>{
  try {
    return await axios.patch(`${DBURL}${endpointProduct.offert}/${id}`,{title: 'title'},{
      headers: { 'access-token': accessToken},
    });
  } catch (error) {
    console.log(error);
  }
}

//users

export const createUser = async (userData) => {
  try {
    return await axios.post(
      `${DBURL}${endpointUsers.create}`,
      userData
    );
  } catch (error) {
    console.log(error);
    return error.response.data.errors[0].value
  }
};

export const addtoCart = async(id, idProduct, accessToken)=>{
  try {
    return await axios.patch(`${DBURL}${endpointUsers.addCart}/${id}`,{'idProduct': idProduct},{
      headers: { 
        'access-token': accessToken
      },
    })
  } catch (error) {
    
  }
}

export const loginApi = async (userData) =>{
  try {
    return await axios.post(`${DBURL}${endpointUsers.login}`, userData);
  } catch (error) {
    console.log(error)
  }
}

export const getCartItems = async(id, accessToken)=>{
  try {
    return await axios.get(`${DBURL}${endpointUsers.getCart}/${id}`, {
      headers: { 
        'access-token': accessToken
      },
    });
  } catch (error) {
    console.log(error);
  }
}