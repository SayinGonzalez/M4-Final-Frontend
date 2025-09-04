//  Hook con la creación y el consumo de cada contexto

import { createContext } from "react";
import { useContext } from "react";

//  1. Crear el contexto (createContext)
//  3. Consumir el contexto (useContext)

/* ──────────────────────────────    THEME BUTTON    ────────────────────────────── */

export const ThemeContext = createContext();    // 1.
export const useThemeContext = () => {          // 3.
  return useContext(ThemeContext);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ───────────────────────────────    FAVORITOS    ─────────────────────────────── */

export const FavsContext = createContext();    // 1.
export const useFavsContext = () => {          // 3.
  return useContext(FavsContext)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ─────────────────────────────────    PET    ───────────────────────────────── */

export const PetContext = createContext();    // 1.
export const usePetContext = () => {          // 3.
  return useContext(PetContext)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* ─────────────────────────────────    PET    ───────────────────────────────── */

export const UserContext = createContext();    // 1.
export const useUserContext = () => {          // 3.
  return useContext(UserContext)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */




// /* ───────────────────────────────   GENERAL   ─────────────────────────────── */

// export const useCreateContext = () => createContext();                // 1
// export const useConsumeContext = (Context) => useContext(Context)   // 3

// /* ────────────────────────────────────────────────────────────────────────────── */