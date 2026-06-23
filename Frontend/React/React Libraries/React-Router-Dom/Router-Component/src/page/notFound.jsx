import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Link to="/">back</Link>
            <p style={{color:"blue"}}>404 Not Found Page</p>
        </>
    )
}