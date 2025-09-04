
//  /auth/...
/* 
    /register
    /login
*/

import api from "./axiosInstance";

// 🔹 Login de usuario
export const loginUser = async (credentials) => {
  const response = await api.post(`/auth/login`, credentials);
  console.log('authApi - login ➜ ', response);
  return response.data;
}

