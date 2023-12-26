import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = async ({children}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const data = { username, password, setUsername, setPassword }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider