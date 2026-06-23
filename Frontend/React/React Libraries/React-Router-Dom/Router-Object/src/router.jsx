import { createBrowserRouter } from "react-router-dom";
import Login from "./page/login";
import GuestRouter from "./components/GuestRouter";
import MainLayout from "./layout/MainLayout";
import Teacher from "./page/teacher";
import Student from "./page/student";
import One from "./page/One";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },

    {
        path:"/login",
        element:<Login />
    },

    {
        path:'/dashboard',
        element: (
        <GuestRouter>
            <MainLayout />
        </GuestRouter>),

         children: [
            {
                index:true,
                element: <Teacher />
            },

            {
                path:"student",
                element:<Student />,

                children: [
                    {
                        path:"one/:id",
                        element: <One />
                    }
                ]
            }
        ]
    }
]);