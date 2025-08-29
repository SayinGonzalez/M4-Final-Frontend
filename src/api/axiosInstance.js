import axios from 'axios';

// puedo crear la instacia en otro archivo y exportarla
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACK,
  // withCredentials: true, // 🔑 necesario para que viaje la cookie de sesión
});

console.log(api)

export default api;