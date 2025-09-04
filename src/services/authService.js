import { loginUser } from "../api/authApi";
import CustomError from "../helpers/customError";
import { jwtDecode } from "jwt-decode";

// 🔹 Obtiene todas las mascotas
export const loginUserService = async (credentials) => {
  try {
    const { token } = await loginUser(credentials);

    if (!token) {
      throw new CustomError("Token inválido", "BackendError");
    }

    const decoded = jwtDecode(token);

    return {token, decoded};

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};