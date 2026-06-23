import { useState } from "react";
import UserContext from "./userContext";

export default function UserProvider({children}) {
    const [ count , setCount ] = useState(0);
    return <UserContext.Provider value={{ count , setCount }}>
        { children }
    </UserContext.Provider>
}