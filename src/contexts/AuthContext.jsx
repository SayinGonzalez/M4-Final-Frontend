
import { useState } from "react";
import { loginUserService } from "../services/authService";
import api from "../api/axiosInstance";
import CustomError from "../helpers/customError";
import { AuthContext } from "../hooks/useContexts";

//  2. Crear el provider
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  // login
  const login = async (identifier, password) => {
    try {
      const { token, decoded } = await loginUserService({ identifier, password })
      setUser(decoded)

      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      return true

    } catch (err) {
      // error de red en front
      if (!err.response) {
        throw new CustomError(err.message, "NetworkError");
      }
      throw err; // errores del backend ya lanzados como BackendError
    }
  }

  // logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    delete api.defaults.headers.common['Authorization']
  }

  // register


  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider >
  )
}
//  2.1 Usar el provider en el main.jsx