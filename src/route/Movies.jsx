import { useLoaderData } from "react-router-dom"
import { Card } from "../UI/Card";

export const Movies = () => {

    const moviesData = useLoaderData();
    console.log(moviesData);

    return (
        <>
            <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {moviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />
                })}
            </ul>

        </>
    )
}