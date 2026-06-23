import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Login from "./page/login";
import MainLayout from "./layout/MainLayout";
import Teacher from "./page/teacher";
import Student from "./page/student";
import ProtectRouter from "./components/ProtectRoute";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />

                <Route path="/management" element = { <ProtectRouter> <MainLayout /> </ProtectRouter> }>
                    <Route index element={<Home />} />
                    <Route path="teacher" element={<Teacher />} />
                </Route>

                <Route path="/student/:id" element={<Student />} />
            </Routes>
        </BrowserRouter>
    )
}


/*
    BrowserRouter — это компонент, который включает роутинг в React-приложении.

    Он:

    следит за URL в браузере;
    показывает нужный компонент для текущего пути;
    позволяет переходить между страницами без перезагрузки.
*/

/*
    Routes — это контейнер для всех маршрутов (Route).
    Он смотрит на текущий URL и выбирает, какой Route отобразить.
*/

/*
    Route - Route — это правило, которое говорит: Если URL совпадает с path, покажи компонент из element.
*/

/*
    path - Это пусть через который Navigator запускает pages
    element - Это компоненета который переходит через path

    path = "/" - default
    path = "*" - notFound
    path =  "/index" - defined path

    path = "/:params" - width parametrs
    path = "home" - children path
*/ 


/*
    index - это дефолтный главный марщрут родителя. И он используется только с children
    params
*/

/*
    useParams()
    useSearchParams()
    <Navigate />
    useNavigate()
    <Link>
    <NavLink />
    <Outlet />

    ProtectRouter Auth:
*/
