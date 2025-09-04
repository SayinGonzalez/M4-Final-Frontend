import {
  getPets,
  getUserPets,
  getPetsCategory,
  getPetById,
  createPet,
  updatePet,
  deletePet
} from '../api/petApi';
import CustomError from '../helpers/customError.js';
import { capitalize } from '../helpers/formatters';

// 🔹 Obtiene todas las mascotas
export const fetchPetsService = async () => {
  try {
    const { data: pets, success, message } = await getPets();

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return { pets, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};

// 🔹 Obtiene las mascotas del usuario
export const fetchUserPetsService = async () => {
  try {
    const { data, success, message, pagination } = await getUserPets();

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return {
      pets: data,        // las mascotas
      pagination,        // info de paginación
    };
    
  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw new CustomError(err.message, "ServiceError");
  }
};

// 🔹 Obtiene mascotas por categoría
export const fetchPetsByCategoryService = async (category) => {
  try {
    const { data: pets, success, message } = await getPetsCategory(category);

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return { pets, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};

// 🔹 Obtiene una mascota por ID
export const fetchPetByIdService = async (id) => {
  try {
    const { data: pet, success, message } = await getPetById(id);

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    const petModified = {
      ...pet,
      animalType: capitalize(pet?.animalType),
      sexo: (pet?.sexo === 'female') ? 'Hembra' : 'Macho',
      age: capitalize(pet?.age),
      category: capitalize(pet?.category)
    };
    console.log('petModified fetchPetByIdService ➜ ', petModified)

    return { pet, petModified, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};

// 🔹 Crea una nueva mascota
export const createPetService = async (petData) => {
  try {
    const { data: newPet, success, message } = await createPet(petData);

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return { newPet, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};

// 🔹 Actualiza una mascota existente
export const updatePetService = async (id, data) => {
  try {
    const { data: updatedPet, success, message } = await updatePet(id, data);

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return { updatedPet, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};

// 🔹 Elimina una mascota
export const deletePetService = async (id) => {
  try {
    const { data: pet, success, message } = await deletePet(id);

    if (!success) {
      throw new CustomError(message, "BackendError");
    }

    return { pet, success, message };

  } catch (err) {
    // error de red en front
    if (!err.response) {
      throw new CustomError(err.message, "NetworkError");
    }
    throw err; // errores del backend ya lanzados como BackendError
  }
};