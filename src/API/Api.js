import axios from 'axios';
import { endpointProduct, endpointUsers } from './Endpoints';
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

export const createProduct = async (productData, token) => {
  try {
    return await axios.post(`${DBURL}${endpointProduct.create}`, productData,{
      headers: { 
        'access-token': token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (formImage) => {
  try {
    return await axios.post(
      `${DBURL}${endpointProduct.uploadImage}`,
      formImage
    );
  } catch (error) {
    console.log(error);
  }
};

export const uploadImagess = async (formImagess) => {
  try {
    return await axios.post(
      `${DBURL}${endpointProduct.uploadImagess}`,
      formImagess,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (productEdit, id, accessToken) => {
  try {
    return await axios.patch(`${DBURL}${endpointProduct.edit}/${id}`, productEdit,{
      headers: { 
        'access-token': accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id, accessToken) =>{
  try {
    return await axios.delete(`${DBURL}${endpointProduct.delete}/${id}`,{
      headers: { 
        'access-token': accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

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
    return await axios.post(`${DBURL}${endpointUsers.create}`, userData);
  } catch (error) {
    console.log(error);
    return error.response.data.errors[0].value;
  }
};

export const getUserById = async (id, token) => {
  try {
    return await axios.get(`${DBURL}${endpointUsers.getUsers}/${id}`, {
      headers: {
        'access-token': token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllusers = async(token)=>{
  try {
    return await axios.get(`${DBURL}${endpointUsers.getAllusers}`,{
      headers: {
        'access-token': token,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const editUser = async (id, userData, token) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointUsers.editUser}/${id}`,
      userData,
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const checkPassword = async (id, password, token) => {
  try {
    return await axios.post(
      `${DBURL}${endpointUsers.checkPassword}/${id}`,
      { password },
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editUserName = async (id, userData, token) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointUsers.editUserName}/${id}`,
      userData,
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editUserEmail = async (id, userData, token) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointUsers.editUserEmail}/${id}`,
      userData,
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editUserPassword = async (id, userData, token) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointUsers.editUserPassword}/${id}`,
      userData,
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editUserLanguage = async (id, userData, token) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointUsers.editUserLanguage}/${id}`,
      userData,
      {
        headers: {
          'access-token': token,
        },
      }
    );
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
}

export const loginApi = async (userData) =>{
  try {
    return await axios.post(`${DBURL}${endpointUsers.login}`, userData);
  } catch (error) {
    console.log(error);
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

export const getEmailUser = async(email, token)=>{
  try {
    return await axios.get(`${DBURL}${endpointUsers.getEmail}/${email}`, {
      headers: { 
        'access-token': token
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const disabledUser = async(id, token)=>{
  try {
    return await axios.get(`${DBURL}${endpointUsers.disabled}/${id}`, {
      headers: { 
        'access-token': token
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export const abledUser = async(id, token)=>{
  try {
    return await axios.get(`${DBURL}${endpointUsers.abled}/${id}`, {
      headers: { 
        'access-token': token
      },
    });
  } catch (error) {
    console.log(error);
  }
}