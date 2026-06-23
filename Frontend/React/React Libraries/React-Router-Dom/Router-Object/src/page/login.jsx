import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const password = import.meta.env.VITE_PASSWORD;
    const [ validate , setValidate ] = useState(); 
    const navigate = useNavigate();    

    function handlePassword(e) {
        setValidate(+e.target.value)
    }

    function check() {
        if ( +validate !== +password )
            return

        localStorage.setItem("accessToken" , 1234);
        navigate("/dashboard")
    }

    return (
        <form>
            <input onChange={handlePassword} type="number" placeholder="...number" />
            <p></p>
            <button onClick={check} type="button">send</button>
        </form>
    )
}