import {
  getPets,
  getPetsCategory,
  getPet,
  createPet,
  updatePet,
  deletePet
} from '../api/petApi';
import { capitalize } from '../helpers/formatters';

// 🔹 Obtiene todas las mascotas
export const fetchPetsService = async () => {
  try {
    return await getPets();
  } catch (error) {
    console.error("Error al obtener mascotas:", error);
    throw error;
  }
};

// 🔹 Obtiene mascotas por categoría
export const fetchPetsByCategoryService = async (category) => {
  try {
    return await getPetsCategory(category);
  } catch (error) {
    console.error(`Error al obtener mascotas de la categoría ${category}:`, error);
    throw error;
  }
};

// 🔹 Obtiene una mascota por ID
export const fetchPetByIdService = async (id) => {
  try {
    const pet = await getPet(id);
    const petModified = {
      ...pet,
      animalType: capitalize(pet?.animalType),
      age: (pet?.age === 'female') ? 'Hembra' : 'Macho',
      category: capitalize(pet?.category)
    };
    console.log('petModified -> ', petModified)
    return petModified
  } catch (error) {
    console.error(`Error al obtener la mascota con id ${id}:`, error);
    throw error;
  }
};

// 🔹 Crea una nueva mascota
export const createPetService = async (data) => {
  try {
    return await createPet(data);
  } catch (error) {
    console.error("Error al crear mascota:", error);
    throw error;
  }
};

// 🔹 Actualiza una mascota existente
export const updatePetService = async (id, data) => {
  try {
    return await updatePet(id, data);
  } catch (error) {
    console.error(`Error al actualizar mascota con id ${id}:`, error);
    throw error;
  }
};

// 🔹 Elimina una mascota
export const deletePetService = async (id) => {
  try {
    return await deletePet(id);
  } catch (error) {
    console.error(`Error al eliminar mascota con id ${id}:`, error);
    throw error;
  }
};





// Ejemplo: queremos solo usuarios con email válido y que el nombre esté en mayúsculas

// function isValidEmail(email) {
//   // Validación simple
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// // Validamos y transformamos
// const filteredUsers = users
//   .filter(user => isValidEmail(user.email))
//   .map(user => ({
//     id: user.id,
//     name: user.name.toUpperCase(),
//     email: user.email,
//   }));

