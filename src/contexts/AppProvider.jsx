//  Custom Hook con todos los providers

// import { ItemProvider } from "./ItemContext";
import { FavsProvider } from "./FavsContext";
import { PetProvider } from "./PetContext";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

export function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <FavsProvider>
        <UserProvider>
          <PetProvider>
            {children}
          </PetProvider>
        </UserProvider>
      </FavsProvider>
    </ThemeProvider>
  );
}