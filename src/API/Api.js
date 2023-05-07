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

export const getAllProducts = async () => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getAll}`, {
      headers: {
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getId}/${id}`, {
      headers: {
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
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

export const editProduct = async (productEdit, id)=>{
  try {
    return await axios.patch(`${DBURL}${endpointProduct.edit}/${id}`, productEdit,{
      headers: { 'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8'},
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
