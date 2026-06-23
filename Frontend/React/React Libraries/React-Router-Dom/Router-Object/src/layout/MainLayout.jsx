import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <header>
                <nav style={{display:"flex" , gap:"5px"}}>
                    <NavLink end style={({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" })} to="/dashboard" >teacher</NavLink>
                    <NavLink style={({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none"  })} to="/dashboard/student/one/12" >student</NavLink>
                </nav>
            </header>
                <Outlet />
            <footer>
                header
            </footer>
        </div>
    )
}