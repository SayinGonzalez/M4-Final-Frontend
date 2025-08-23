import { useCallback, useEffect, useState } from 'react';
import {
  fetchPetsService,
  fetchPetsByCategoryService,
  fetchPetByIdService,
  createPetService,
  updatePetService,
  deletePetService
} from "../services/petService";

export const usePets = () => {
  const [pets, setPets] = useState();
  const [petsMatchcotas, setPetsMatchcotas] = useState(() => {
    return (JSON.parse(localStorage.getItem('petsMatchcotas')) || [])
  });
  const [petsAdoptions, setPetsAdoptions] = useState();
  const [currentPet, setCurrentPet] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [petsMatchcotas, setPetsMatchcotas] = useState()


  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones principales  */

  // 🔹 Obtiene todas las mascotas
  const getPets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPetsService();
      setPets(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Obtiene mascotas por categoría
  const loadPetsByCategory = useCallback(async (category) => {
    setLoading(true);
    setError(null);
    console.log('INGRESO loadPetsByCategory')
    try {
      const data = await fetchPetsByCategoryService(category);

      console.log('category: adoption -> ', category === 'adoption')
      category === 'adoption' && setPetsAdoptions(data)

      console.log('category: matchcotas -> ', category === 'match')
      if (category === 'match') {
        setPetsMatchcotas(data);
        localStorage.setItem("petsMatchcotas", JSON.stringify(data));
      }

      setCurrentIndex(0); // reiniciar índice
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

  }, []);

  // 🔹 Obtiene una mascota por ID
  const getPetById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      setCurrentPet()
      const pet = await fetchPetByIdService(id);
      setCurrentPet(pet);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Crea una nueva mascota
  const addPet = useCallback(async (data) => {
    try {
      const newPet = await createPetService(data);
      setPets(prev => [...prev, newPet]);
    } catch (err) {
      setError(err);
    }
  }, []);

  // 🔹 Actualiza una mascota existente
  const editPet = useCallback(async (id, data) => {
    try {
      const updatedPet = await updatePetService(id, data);
      setPets(prev => prev.map(p => (p.id === id ? updatedPet : p)));
    } catch (err) {
      setError(err);
    }
  }, []);

  // 🔹 Elimina una mascota
  const removePet = useCallback(async (id) => {
    try {
      await deletePetService(id);
      setPets(prev => prev.filter(p => p.id !== id));
      setCurrentIndex(prev => Math.min(prev, pets.length - 2)); // ajustar índice si es necesario
    } catch (err) {
      setError(err);
    }
  }, [pets]);


  /* ────────────────────────────────────────────────────────────────────────────── */

  /*   Funciones para el carrusel para Matchcotas  */

  const nextPet = () => {
    if (!petsMatchcotas || petsMatchcotas.length === 0) return;
    setCurrentIndex(prev => (prev + 1) % petsMatchcotas.length); // loop circular
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
    petsMatchcotas,
    petsAdoptions,
    currentPet,
    loading,
    error,
    currentIndex,
    loadPetsByCategory,
    getPetById,
    addPet,
    editPet,
    removePet,
    nextPet,
    removeCurrentPet
  };
};