// --------------------------- Satet Mangament ( useContext ) -------------------------------------------  //

/*
    State Mangament - это контролоирование state глобально.
    Это означает что мы можем испольщовать state в любом jsx файле.

    Она в основном полезна тогда когда файловая структура станет вложенным.
*/

// context:
/*
    userContext.jsx // в этом файле мы создаем context
    userProvider // и для контекст создаем провайдер.
*/

// userContext:

import { createContext } from "react";
const UserContext = createContext();
export default UserContext;



// userProvider:
/*
    через value мы пердаем states которые мы будем испольщовать
    в лююых вайлах jsx.
*/

import { useState } from "react";
import UserContext from "./userContext";

export function UserProvider({children}) {
    const [ count , setCount ] = useState(0);
    return <UserContext.Provider value={{ count , setCount }}>
        { children }
    </UserContext.Provider>
}

// App:
import { useContext } from "react";
import UserContext from "./context/userContext";

export default function App() {
    const { count , setCount } = useContext(UserContext);
    const increment = () => setCount( current => current + 1 );

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>click</button>
        </div>
    )
}


// main - мы Provider поставили поверх App чтобы обобшенно получить доступ ко все вайлам  jsx.
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from "./context/userProvider.jsx";

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <App />
    </UserProvider>
)