import { UserContext } from "../hooks/useContexts";
import { useUser } from "../hooks/useUser";

export const UserProvider = ({ children }) => {
    const userData = useUser();
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}
