// -------------------------------------------- React Router Dom ------------------------------------------------ //

/*
    React Router Dom - это библиотека для React Js для навигации без перезагрузки.
*/ 

// Существует два вида использования React Router



/*
    Declarative Routing - роутер настраивабся через компоненты react-router-dom
*/

<BrowserRouter></BrowserRouter>
/*
    <BrowserRouter></BrowserRouter> — это компонент, который включает роутинг в React-приложении.

    Он:

    следит за URL в браузере;
    показывает нужный компонент для текущего пути;
    позволяет переходить между страницами без перезагрузки.
*/

// <Routes></Routes>
/*
    <Routes></Routes> — это контейнер для всех маршрутов (Route).
    Он смотрит на текущий URL и выбирает, какой Route отобразить.
*/

// <Route />
/*
    <Route /> - Route — это правило, которое говорит: Если URL совпадает с path, покажи компонент из element.
*/






// *****   Используются для оба подхода.  *** //

// element = { <Component /> }
/*
    element - который принимает компоненту и запускает данную компоннету через url path.
*/ 

// path = "/pathname" 
/*
    path = "/" - default
    path = "*" - notFound
    path =  "/pathname" - defined path
    path = "children_pathname" - children path - пишется если router это children
    path = "/pathname:parametr"
*/

// Navigation:
/*
    <Link to="/pathname"></Link> - чтобы использовать навигацию для других page. to - это указатель куда надо марщрутизировать.
    <Outlet /> - это специальнвя компонента которая запускает те children page компоненты которые находятся внутри parent <Route><Route /> 
    <NavLik end style = { ({isActive}) => ({ color: isActive ? red : blue }) } to="/pathname"></NavLink> - работает точно так же как <Link> но в отличие он делает Link активным ,  
    end нужно добавляеть если начало pathname совпадает а то они все будут активными
*/

// Parametrs
/*
   const { parametrName } = useParams() - он берет данные из параметра и дает возможность его использовать.

   const [ searchParams ] = useSearchParams() - через него мы можем взять параметры search.
   searchParams.get("name");
*/

// navigation and protect Router

/*
    *- useNavigate hook - используется для динамической переход к страницам Без использования Link или NavLink

    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/pageName") / navigate(-1) / navogate(1) /  navigate("/pathname" , { replace:true , state : { age:23 }  }) 
    }

    replace - звменяет текущий url чтобы не возврашатся обратно
    state - нужна чтобы дать параметры к другой странице.

    *<Navigate to = "/pathname" /> - в отличие от useNavigate он используется только для return
 
    *- useLocation() - используется, когда тебе нужна информация о текущем адресе страницы:
    
        const location = useLocation();
            location.pathname - pathname
            location.search - searchParamters
            location.state.name - берез данные из useNavigate()
            location.hash - # это якор для перехода местами страницы.

    Protect Router - это специальная правило напсиная для безовасности роутера.
*/

// router.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Login from "./page/login";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />

                <Route path="/management" element = { 
                    <ProtectRouter> 
                        <MainLayout /> 
                    </ProtectRouter> }>
                        <Route index element={<Home />} />
                        <Route path="teacher" element={<Teacher />} />
                </Route>

                <Route path="/student/:id" element={<Student />} />
            </Routes>
        </BrowserRouter>
    )
}

// ./components/protectRouter
import { Navigate } from "react-router-dom";

export default function ProtectRouter({children}) {
    if ( !localStorage.getItem("accessToken") ) {
        return <Navigate to="/login" />
    }

    return children

}

// ./layout/MainLayout.jsx:
import { Outlet , Link } from "react-router-dom";

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

// ./page/home.jsx
import { Link ,  NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <p style={{color:"red"}}>Home Page</p>
            
            <nav style={{display:"flex" , gap:"5px"}}>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"})} to="/login">login</NavLink>
                <NavLink style={ ({isActive}) => ({ borderBottom: isActive ? "2px solid red" : "none" , textDecoration:"none" , color:"blue"}) } to="/">home</NavLink>

                <Link to="/management">management</Link>
                <Link to="/management/teacher">management teacher</Link>
            </nav>
        </>
    )
}


// ./page/login.jsx
import { Link , NavLink } from "react-router-dom";

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

                <Link to="/management">management</Link>
            </nav>

            <p>{location.state.name}</p>

            <Link onClick={toScroll} to="/login#team">salom</Link>
            <p style={{marginTop:"1200px"}} id="team">salom</p>
        </>
    )
}

// .page/notFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Link to="/">back</Link>
            <p style={{color:"blue"}}>404 Not Found Page</p>
        </>
    )
}

// .page/teacher.jsx
export default function Teacher () {
    return (
        <p>Management Teacher Page</p>
    )
}

// ./page/student.jsx
import { useParams, useSearchParams  , useNavigate } from "react-router-dom";
import ProtectRouter from "./Router-Component/src/components/ProtectRoute";

export default function Student() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    function nextPage() {
        navigate( "/login" , {
            replace:true,
            state: {
                name:"Primov"
            }
        } )
    }

    return (
        <>
            <p>Student id: {id}</p>
            <p>Student age: {searchParams.get("age")}</p>
            <p>Student name: { searchParams.get("name") }</p>
            <button onClick={nextPage}>login</button>
        </>
    )
}


/*
    Data-Router - роутер настраивается черз обьектный конструктор.
*/