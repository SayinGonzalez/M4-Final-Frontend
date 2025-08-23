//  CONSULTAS RELACIONADAS A LAS MASCOTAS

import api from "./axiosInstance";

// 🔹 Obtiene todas las mascotas
const getPets = async () => {
  const response = await api.get('/pets');
  return response.data;
};

// 🔹 Obtiene mascotas por categoría
const getPetsCategory = async (category) => {
  const response = await api.get('/pets', {
    params: { category } 
  });
  return response.data;
};

// 🔹 Obtiene una mascota por ID
const getPet = async (id) => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};

// 🔹 Crea una nueva mascota
const createPet = async (data) => {
  const response = await api.post('/pets', data);
  return response.data;
};

// 🔹 Actualiza una mascota existente
const updatePet = async (id, data) => {
  const response = await api.put(`/pets/${id}`, data);
  return response.data;
};

// 🔹 Elimina una mascota
const deletePet = async (id) => {
  const response = await api.delete(`/pets/${id}`);
  return response.data;
};

export {
  getPets,
  getPetsCategory,
  getPet,
  createPet,
  updatePet,
  deletePet
};
