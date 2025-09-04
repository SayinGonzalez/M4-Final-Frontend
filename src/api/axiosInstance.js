import axios from 'axios';

//  Instancia
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BACK,
  // withCredentials: true, // 🔑 necesario para que viaje la cookie de sesión
});

console.log(api)

export default api;