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

export const getAllProducts = async () => {
  try {
    return await axios.get(`${DBURL}${endpointProduct.getAll}`, {
      headers: {
        'access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
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
        'access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (productData) => {
  try {
    return await axios.post(`${DBURL}${endpointProduct.create}`, productData);
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
    return await axios.patch(
      `${DBURL}${endpointProduct.edit}/${id}`,
      productEdit,
      {
        headers: {
          'access-token': accessToken,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${DBURL}${endpointProduct.delete}/${id}`, {
      headers: {
        'access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const restartOfferts = async () => {
  try {
    return await axios.patch(
      `${DBURL}${endpointProduct.restartOffert}`,
      { title: 'title' },
      {
        headers: {
          'access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const offertProd = async (id) => {
  try {
    return await axios.patch(
      `${DBURL}${endpointProduct.offert}/${id}`,
      { title: 'title' },
      {
        headers: {
          'access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZiZTE4Y2Y5OWMyZGUxNGM2YjU2ZSIsImVtYWlsIjoiYWRtaW50ZWNoMTU5QGdtYWlsLmNvbSIsInJvbGVBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgzNDE4OTE1fQ.Mbs5uG6pB1a7P4fbyn5DKdeC-l6UK6arFOpcQtANbV8',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

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

export const login = async (userData) => {
  try {
    return await axios.post(`${DBURL}${endpointUsers.login}`, userData);
  } catch (error) {
    console.log(error);
  }
};
