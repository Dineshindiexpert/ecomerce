import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

// make an object to all api 
export const apiService = {
  // all products related
  getProducts: () => API.get('/products'),
  getSingleProduct: (id) => API.get(`/products/${id}`),
  getCategories: () => API.get('/products/categories'),
  getallcart:() => API.get('/carts'),
  getCart: (userId) => API.get(`/carts/user/${userId}`),
  
  // User related 
  getUsers: () => API.get('/users'),

  // get the single user profile option 
  getloginuser: (id) => API.get(`/users/${id}`)
};
