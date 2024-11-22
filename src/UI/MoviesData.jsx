import { useParams } from "react-router-dom"

export const MoviesData =() =>{

    const params = useParams();
    console.log(params)
    return(
        <>
        <h1>Hello Movie, {params.movieId}</h1>
        </>
    )
}