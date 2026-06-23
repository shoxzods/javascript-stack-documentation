import { Navigate } from "react-router-dom";

export default function({children}) {
    if ( !localStorage.getItem("accessToken") ) {
        return <Navigate to="/login" />
    }

    return children
}