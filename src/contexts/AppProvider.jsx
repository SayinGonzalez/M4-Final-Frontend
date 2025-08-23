//  Custom Hook con todos los providers

// import { ItemProvider } from "./ItemContext";
import { FavsProvider } from "./FavsContext";
import { PetProvider } from "./PetContext";
import { ThemeProvider } from "./ThemeContext";

export function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <FavsProvider>
        <PetProvider>
          {children}
        </PetProvider>
      </FavsProvider>
    </ThemeProvider>
  );
}