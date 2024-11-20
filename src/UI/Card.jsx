export const Card = ({curMovie}) =>{
const { Poster,Title, Year,imdbID } = curMovie;
    return(
        <>
        <li className="border ">
            <div>
                <div className="ms-5 w-3/4 h-40 ">
                <img src={Poster} alt={imdbID} />
                </div>
                <h3>{Title}</h3>
                <h3>{Year}</h3>
            </div>
<div>
    <button>Watch Now</button>
</div>
        </li>
        </>
    )
}