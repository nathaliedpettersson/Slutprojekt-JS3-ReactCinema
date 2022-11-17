import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const MovieItem = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    const displayMovies = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>{location.state.movie.title}</h1>
            <img src={location.state.movie.img}></img>
            <p>{location.state.movie.longDesc}</p>

            <Button handleClick={displayMovies} btnText={'Go back'}/>
        </div>
    )
}

export default MovieItem;