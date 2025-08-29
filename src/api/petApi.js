//  CONSULTAS RELACIONADAS A LAS MASCOTAS

import api from "./axiosInstance";

// 🔹 Obtiene todas las mascotas
const getPets = async () => {
  const response = await api.get('/pets');
  console.log('Data petApi getPets ➜ ', response.data);
  return response.data;
};

// 🔹 Obtiene mascotas por categoría
const getPetsCategory = async (category) => {
  const response = await api.get(`/pets/category/${category}`)
  console.log('Data petApi getByCategory ➜ ', response);
  return response.data;
};

// 🔹 Obtiene una mascota por ID
const getPetById = async (id) => {
  const response = await api.get(`/pets/id/${id}`);
  console.log('Data petApi getPetById ➜ ', response);
  return response.data;
};

// 🔹 Crea una nueva mascota
const createPet = async (data) => {
  const response = await api.post('/pets/add', data);
  console.log('Data petApi createPet ➜ ', response);
  return response.data;
};

// 🔹 Actualiza una mascota existente
const updatePet = async (id, data) => {
  const response = await api.put(`/pets/edit/${id}`, data);
  console.log('Data petApi updatePet ➜ ', response);
  return response.data;
};

// 🔹 Elimina una mascota
const deletePet = async (id) => {
  const response = await api.delete(`/pets/delete/${id}`);
  console.log('Data petApi deletePet ➜ ', response);
  return response.data;
};

export {
  getPets,
  getPetsCategory,
  getPetById,
  createPet,
  updatePet,
  deletePet
};
