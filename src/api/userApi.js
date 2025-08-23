//  CONSULTAS RELACIONADAS A LOS USUARIOS

import api from "./axiosInstance";

const loginUser = (credentials) => api.post(`/auth/login`, credentials);

export default loginUser
