import { Link , NavLink, useLocation } from "react-router-dom";

export default function Login() {
    const location = useLocation();

    function toScroll() {
        const el = document.querySelector(location.hash);
        el.scrollIntoView({behavior:"smooth"});
    }

    return (
        <>
            <p style={{color:"green"}}>Login Page</p>
            
            <nav style={{display:"flex" , gap:"5px"}}>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"})} to="/login">login</NavLink>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"}) } to="/">home</NavLink>
                
                <Link style={{textDecoration:"none" , color:"blue"}} to="/management">management</Link>
            </nav>

            <p>{location.state?.name}</p>

            <Link onClick={toScroll} to="/login#team">salom</Link>
            <p style={{marginTop:"1200px"}} id="team">salom</p>
        </>
    )
}