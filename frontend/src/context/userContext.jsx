import { createContext, useContext, useState } from "react";


const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const getData = () => {
    const context = useContext(UserContext);
  if (!context) {
    throw new Error("getData must be used inside UserProvider");
  }
  return context;
}