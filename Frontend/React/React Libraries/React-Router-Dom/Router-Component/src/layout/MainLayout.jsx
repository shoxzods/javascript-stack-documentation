import { Outlet , NavLink } from "react-router-dom";

export default function MainLayout() {
    return (
        <>  
            <p style={{border:"1px solid red" , color:"gray"}}>Main Layout Page</p>
              <nav style={{display:"flex" , gap:"5px"}} >
                <NavLink end style={ ({isActive}) => ({ borderBottom: isActive ? "3px solid red" : "none" , textDecoration:"none" , color:"blue"} ) } to="/management">home</NavLink>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "3px solid red" : "none" , textDecoration:"none" , color:"blue"} ) } to="/management/teacher">teacher</NavLink>
              </nav>
            <Outlet />
        </>
    )
}