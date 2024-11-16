import { NavLink, useRouteError } from "react-router-dom"

export const Error = () => {

    const error = useRouteError();

    if (error.status === 404) {

        return (

            <div className="flex flex-col items-center justify-center">
                <figure className="flex items-center justify-center">
                    <img className="w-full md:w-1/2 lg:w-1/3  h-auto" src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                        alt="404 page" />

                </figure>
                <p className="font-bold"> The page you were looking for could not be found </p>
                <p>Plese</p>
<br />
<button className="bg-red-700 rounded text-white w-19"><NavLink to="/"> GO TO HOMEPAGE </NavLink></button>
            </div>


        )
    }

}