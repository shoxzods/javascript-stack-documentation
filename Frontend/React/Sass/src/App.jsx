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