// import from rendermovies

// navigate to /movies/:title to display specific movie

// Fix X-button to be added IF logged in user === email that submitted a specific movie/movies (remove from LocalStorage)

import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayMovie = () => {

    // Get movies from localstorage
    const getMovies = JSON.parse(localStorage.getItem("movies"));

    const navigate = useNavigate();

    // Button to navigate back to add movies when we have been redirected to render movies

    // IMPORT BUTTON HERE TO NAVIGATE AND TO DO THE READ MORE CODE UNDERNEATH 

    const displayMovieItem = (movie) => {
        navigate("/movies/" + movie.title, {state: { movie }})
    }

    // Mapping through getMovies to get value from localstorage and show it in DOM

    // FIX BUTTON...When read more is clicked it's supposed to get the specific id/value/index of that movie and navigate user to "/renderlongmovies" and show the LONG description in there for that specific movie (do something similar to this mapping down here)
    return (
        <div>
            <ul>
                {getMovies.map((movie, index) => {
                    return (
                    <li key={index}>
                        <h3>{movie.title}</h3>
                        <img src={movie.img}></img>
                        <p>{movie.summary}</p>
                        <button onClick={() => displayMovieItem(movie)}>Read more</button>
                    </li>
                    )
                    
                })}
            </ul>
          
        </div>
    )
}

export default DisplayMovie;