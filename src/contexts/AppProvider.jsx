//  Custom Hook con todos los providers

// import { ItemProvider } from "./ItemContext";
import { AuthProvider } from "./AuthContext";
import { FavsProvider } from "./FavsContext";
import { PetProvider } from "./PetContext";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

export function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FavsProvider>
          <UserProvider>
            <PetProvider>
              {children}
            </PetProvider>
          </UserProvider>
        </FavsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}