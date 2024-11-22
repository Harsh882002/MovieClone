import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { About, Contact, Home } from "./AllRoute"
import { Error } from "../error/Error"
import { getMoviesData } from "../api/GetApi"
import { Movies } from "./Movies"
import { MoviesData } from "../UI/MoviesData"

export const Routerss = () => {

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Layout />,
                errorElement: <Error />,
                children: [
                    {
                        path: "/",
                        element: <Home />
                    },

                    {
                        path: "/about",
                        element: <About />
                    },

                    {
                        path: "/movies",
                        element: <Movies />,
                        loader: getMoviesData,

                    },

                    {
                        path: "/movies/:movieId",
                        element: <moviesData />,
                        loader: getMovieDetails 


                    },

                    {
                        path: "/contact",
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