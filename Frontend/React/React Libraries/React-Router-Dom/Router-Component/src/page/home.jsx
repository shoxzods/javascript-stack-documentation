import { Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <p style={{color:"red"}}>Home Page</p>
            
            <nav style={{display:"flex" , gap:"5px"}}>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"})} to="/login">login</NavLink>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"}) } to="/">home</NavLink>

                <Link style={{textDecoration:"none" , color:"blue"}} to="/management">management</Link>
                <Link style={{textDecoration:"none" , color:"blue"}} to="/management/teacher">teacher</Link>
                <Link to="/student/12/?name=Ali&age=23">student</Link>
            </nav>
        </>
    )
}