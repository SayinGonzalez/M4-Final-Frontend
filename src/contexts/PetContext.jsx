//  Contexto para Mascotas

import { PetContext } from "../hooks/useContexts"
import { usePets } from "../hooks/usePets";

export const PetProvider = ({ children }) => {

  const petsData = usePets();

  return (
    <PetContext.Provider value={petsData}>
      {children}
    </PetContext.Provider>
  )
}