// Fix X-button to be added IF logged in user === email that submitted a specific movie/movies (remove from LocalStorage)


import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const DisplayMovie = () => {

    // Get movies from localstorage
    const getMovies = JSON.parse(localStorage.getItem("movies"));

    const navigate = useNavigate();

    const addNewMovie = () => {
        navigate("/movies/addMovie")
    }

    const displayMovieItem = (movie) => {
        navigate("/movies/" + movie.title, {state: { movie }})
    }

    // Mapping through getMovies to get value from localstorage and show it in DOM

    return (
        <div>
            <ul>
                {getMovies.map((movie, index) => {
                    return (
                    <li key={index}>
                        <h3>{movie.title}</h3>
                        <img src={movie.img} alt="Movie image"></img>
                        <p>{movie.summary}</p>
                        <button onClick={() => displayMovieItem(movie)}>Read more</button>
                    </li>
                    )
                    
                })}
            </ul>
          <Button handleClick={addNewMovie} btnText={'Add another movie'}/>
        </div>
    )
}

export default DisplayMovie;