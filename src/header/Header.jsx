import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <>
        <div className="relative bg-blue-400 h-6 w-full top-0.5 rounded ">
        <h2 className="absolute left-4 font-bold text-red-700">DhekoFlix</h2>

            <ul className=" absolute top-0 right-16 text-sm flex space-x-3 p-0 font-bold  ">
                <li><NavLink to='/'>Home</NavLink></li>  
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            </div>
        </>

    )
}