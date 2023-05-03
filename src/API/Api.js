import axios from 'axios';
import { endpointProduct, endpointUsers } from './Endpoints';

import { customAlert } from '../assets/utils/alters';
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
        'access-token': 'token',
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
        'access-token': 'token',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//users

export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      `${DBURL}${endpointUsers.users}create-user`,
      userData
    );

    customAlert(
      response.data,
      'Ya puedes iniciar sesión.',
      'success',
      () => {
        console.log(response);
        //navigate('/login');
      }
    );
  } catch (error) {
    let errorsMsg = '';
    error.response.data.errors.forEach((err) => {
      errorsMsg += err.msg + '\n';
    });
    customAlert(
      'Error de registro.',
      errorsMsg,
      'error',
      () => {
        console.log(error);
        //navigate('/register');
      }
    );
  }
};
