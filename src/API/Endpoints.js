const endpointProduct = {
  create: '/products/create-product',
  get: '/products/get-products',
  getAll: '/products/get-all-products',
  getId: '/products/get-product-by-id',
  getCate: '/products/get-product-category',
  searchProd: '/products/search-product',
  getOfferts: '/products/get-product-offerts',
  edit: '/products/edit-product',
  delete: '/products/delete-product',
  offert: '/products/offert-product',
  restartOffert: '/products/restart-offert',
  uploadImage: '/products/imageone-upload',
  uploadImagess: '/products/images-upload'
}

const endpointUsers ={
  create: '/users/create-user',
  getUsers: '/users/get-user-by-id',
  checkPassword: '/users/check-password',
  editUser: '/users/edit-user',
  editUserName: '/users/edit-user-name',
  editUserEmail: '/users/edit-user-email',
  editUserPassword: '/users/edit-user-password',
  editUserLanguage: '/users/edit-user-language',
  login: '/login'
}

export {endpointProduct , endpointUsers}