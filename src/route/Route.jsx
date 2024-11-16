 import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { About, Contact, Home, Movies } from "./AllRoute"
import { Error } from "../error/Error"

export const Routerss = () => {

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element:<Layout />,
                errorElement:<Error />,
                children:[
                    {
                        path:"/",
                        element: <Home />
                    },

                    {
                        path:"/about",
                        element: <About />
                    },
                
                    {
                        path:"/movies",
                        element:<Movies />
                    },

                    {
                        path:"/contact",
                        element: <Contact />
                    }
                ]
            }
        ]
    )


    return (
        <>
<RouterProvider router={router} />
        </>
    )
}