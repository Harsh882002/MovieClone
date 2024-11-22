import { NavLink } from "react-router-dom";

export const Card = ({ curMovie }) => {
    const { Poster, Title, Year, imdbID } = curMovie;
    return (
        <>
            <li className="bg-gray-700">
                <div className=" flex items-center justify-center">
                    <img src={Poster} alt={imdbID} className=" w-40 h-40 object-cover rounded-lg" />
                </div>
                <h3 className="space-x-4 items-center text-center">Title: {Title}</h3>
                <h3 className="space-x-4 items-center text-center">Year: {Year}</h3>

                <div className="bg-red-800 w-40 flex  items-center justify-center  ">

                    <NavLink to={`/movies/${imdbID}`}>
                        <button>Watch Now</button>
                    </NavLink> 

                </div>

            </li>
        </>
    )
}