import { Navigate } from "react-router-dom";

export default function ProtectRouter({children}) {
    if ( !localStorage.getItem("accessToken") ) {
        return <Navigate to="/login" />
    }

    return children

}