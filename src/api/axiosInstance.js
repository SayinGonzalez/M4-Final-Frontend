import axios from 'axios';

// puedo crear la instacia en otro archivo y exportarla
const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

console.log(api)

export default api;