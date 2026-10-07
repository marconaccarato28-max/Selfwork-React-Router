import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
const [user, setUser] = useState(null);

function register(userData) {
setUser(userData);
}

function logout() {
setUser(null);
}

return (
<UserContext.Provider value={{ user, register, logout }}>
{children}
</UserContext.Provider>
);
}

export function useUser() {
return useContext(UserContext);
}