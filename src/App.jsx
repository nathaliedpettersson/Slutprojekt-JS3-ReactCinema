import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Components/Button/Button";

const App = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");
  };

  const displayMovies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [];

  return (
    <div className="main-page">
      <h1 className="main-page-header">&#128253; CINEMA APP REACT &#128253;</h1>
      <div className="btn-wrapper">
        <Button handleClick={goToProfile} btnText={"Add movie"} />
      </div>
      <div className="display-movie-app-container">
        <ul className="display-movies-app">
          {displayMovies.map((movie, index) => {
            return (
              <li key={index}>
                <h3 className="movie-title-app">{movie.title}</h3>
                <img
                  className="movies-img-app"
                  src={movie.img}
                  alt="Movie img"
                ></img>
                <p className="movie-summary-app">{movie.summary}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
