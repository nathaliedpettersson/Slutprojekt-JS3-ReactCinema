import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const DisplayMovie = () => {
  const getMovies = JSON.parse(localStorage.getItem("movies"));

  const navigate = useNavigate();

  const addNewMovie = () => {
    navigate("/movies/addMovie");
  };

  const displayMovieItem = (movie) => {
    navigate("/movies/" + movie.title, { state: { movie } });
  };

  const userLoggedIn = localStorage.getItem("Authorized");

  const removeItem = (index) => {
    const deleteMovie = getMovies.filter((movie) => movie.title !== index);
    localStorage.setItem("movies", JSON.stringify(deleteMovie));

    window.location.reload();
  };

  return (
    <div className="display-movie-container">
      <ul className="display-movies">
        {getMovies.map((movie) => {
          return (
            <li key={movie.title}>
              <h3 className="movie-user">Added by: {movie.user}</h3>
              <h3 className="movie-title">{movie.title}</h3>
              <img
                className="movies-img"
                src={movie.img}
                alt="Movie image"
              ></img>
              <p className="movie-summary">{movie.summary}</p>
              <button
                className="readmore-btn"
                onClick={() => displayMovieItem(movie)}
              >
                Read more
              </button>

              {userLoggedIn === movie.user && (
                <button
                  className="remove-btn"
                  onClick={() => removeItem(movie.title)}
                >
                  X
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <Button handleClick={addNewMovie} btnText={"Add another movie"} />
    </div>
  );
};

export default DisplayMovie;
