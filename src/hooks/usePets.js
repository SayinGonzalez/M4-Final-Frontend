import { useCallback, useEffect, useState } from 'react';
import {
  fetchPetsService,
  fetchUserPetsService,
  fetchPetsByCategoryService,
  fetchPetByIdService,
  createPetService,
  updatePetService,
  deletePetService
} from "../services/petService";

export const usePets = () => {
  const [pets, setPets] = useState();
  const [userPets, setUserPets] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [petsMatchcotas, setPetsMatchcotas] = useState(() => {
    return (JSON.parse(localStorage.getItem('petsMatchcotas')) || [])
  });
  const [petsAdoptions, setPetsAdoptions] = useState();
  const [currentPet, setCurrentPet] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones principales  */

  // 🔹 Obtiene todas las mascotas
  const getPets = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { pets } = await fetchPetsService();
      setPets(pets);

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Obtiene las mascotas del usuario
  const fetchUserPets = async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const { pets, pagination } = await fetchUserPetsService(page, limit);
      setUserPets(pets);
      setPagination(pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Obtiene mascotas por categoría
  const loadPetsByCategory = useCallback(async (category) => {
    setLoading(true);
    setError(null);
    console.log('INGRESO loadPetsByCategory')

    try {
      const { pets } = await fetchPetsByCategoryService(category);

      // console.log('category: adoption -> ', category === 'adoption')
      category === 'adoption' && setPetsAdoptions(pets)

      // console.log('category: matchcotas -> ', category === 'match')
      if (category === 'match') {
        setPetsMatchcotas(pets);
        localStorage.setItem("petsMatchcotas", JSON.stringify(pets));
      }

      setCurrentIndex(0); // reiniciar índice

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

  }, []);

  // 🔹 Obtiene una mascota por ID
  const getPetById = useCallback(async (id, origen) => {
    setLoading(true);
    setError(null);

    try {
      setCurrentPet()
      const { pet, petModified } = await fetchPetByIdService(id);
      setCurrentPet(origen === 'detail' ? petModified : pet);

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Crea una nueva mascota
  const addPet = useCallback(async (data) => {
    try {
      const { newPet } = await createPetService(data);
      setPets(prevPets => [...prevPets, newPet]);
    } catch (err) {
      setError(err);
    }
  }, []);

  // 🔹 Actualiza una mascota existente
  const editPet = useCallback(async (id, data) => {
    try {
      const { updatedPet } = await updatePetService(id, data);
      setPets(prevPets => prevPets.map(pet => (pet._id === id ? updatedPet : pet)));
    } catch (err) {
      setError(err);
    }
  }, []);

  // 🔹 Elimina una mascota
  const removePet = useCallback(async (id) => {
    try {
      await deletePetService(id);
      // ✅ Actualizo el estado local eliminando la mascota
      setPets(prevPets => {
        const updatedPets = prevPets.filter(pet => pet._id !== id);
        // Ajusto el índice si es necesario
        setCurrentIndex(prevIndex => Math.min(prevIndex, updatedPets.length - 1));
        return updatedPets;
      });
    } catch (err) {
      setError(err);
    }
  }, []);


  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones para el carrusel para Matchcotas  */

  const nextPet = () => {
    if (!petsMatchcotas || petsMatchcotas.length === 0) return;
    setCurrentIndex(prevIndex => (prevIndex + 1) % petsMatchcotas.length); // loop circular
  };

  const removeCurrentPet = () => {
    if (!petsMatchcotas || petsMatchcotas.length === 0) return;

    const newPets = petsMatchcotas.filter((_, i) => i !== currentIndex);
    setPetsMatchcotas(newPets);

    localStorage.setItem("petsMatchcotas", JSON.stringify(newPets));

    // Ajustar índice si eliminamos la última card
    if (currentIndex >= newPets.length) setCurrentIndex(newPets.length - 1);
  };

  /* ────────────────────────────────────────────────────────────────────────────── */

  useEffect(() => {
    getPets();
  }, [getPets]);

  /* ────────────────────────────────────────────────────────────────────────────── */

  return {
    pets,
    userPets, 
    petsMatchcotas,
    petsAdoptions,
    currentPet,
    loading,
    error,
    currentIndex,
    pagination,
    fetchUserPets,
    loadPetsByCategory,
    getPetById,
    addPet,
    editPet,
    removePet,
    nextPet,
    removeCurrentPet
  };
};