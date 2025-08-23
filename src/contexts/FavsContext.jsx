//  Maneja el estado global de Favoritos

import { FavsContext } from "../hooks/useContexts";
import useFavs from "../hooks/useFavs";

//  2. Crear el provider
export const FavsProvider = ({ children }) => {
  
  // Crea instancia del custom hook useFavs
  const favs = useFavs();

  return (
    <FavsContext.Provider value={favs}>
      {children}
    </FavsContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx

