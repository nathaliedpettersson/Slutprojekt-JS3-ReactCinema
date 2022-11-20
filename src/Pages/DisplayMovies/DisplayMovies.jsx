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
        <div className="display-movie-container">
            <ul className="display-movies">
                {getMovies.map((movie, index) => {
                    return (
                    <li key={index}>
                        <h3 className="movie-title">{movie.title}</h3>
                        <img className="movies-img" src={movie.img} alt="Movie image"></img>
                        <p className="movie-summary">{movie.summary}</p>
                        <button className="readmore-btn" onClick={() => displayMovieItem(movie)}>Read more</button>
                    </li>
                    )
                    
                })}
            </ul>
          <Button handleClick={addNewMovie} btnText={'Add another movie'}/>
        </div>
    )
}

export default DisplayMovie;