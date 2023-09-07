import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [movies, setMovies] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );

  const navigate = useNavigate();

  const defaultImg =
    "https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg";

  const movieObject = {
    title: "",
    img: "" || defaultImg,
    summary: "",
    longDesc: "",
    user: "",
  };

  const submitNewMovie = (e) => {
    e.preventDefault();
    const loggedInUser = localStorage.getItem("Authorized");
    movieObject.user = loggedInUser;

    setMovies([...movies, movieObject]);
    localStorage.setItem("movies", JSON.stringify([...movies, movieObject]));

    navigate("/movies");
  };

  return (
    <div className="add-movie-background">
      <div className="add-movie-container">
        <form onSubmit={(e) => submitNewMovie(e)}>
          <input
            className="add-movie-input"
            type="text"
            placeholder="Title"
            onChange={(e) => (movieObject.title = e.target.value)}
          />
          <input
            className="add-movie-input"
            type="url"
            placeholder="Url (optional)"
            onChange={(e) => (movieObject.img = e.target.value)}
          />
          <input
            className="add-movie-input"
            type="text"
            placeholder="Short summary"
            onChange={(e) => (movieObject.summary = e.target.value)}
          />
          <input
            className="add-movie-input"
            type="text"
            placeholder="Description"
            onChange={(e) => (movieObject.longDesc = e.target.value)}
          />
          <br></br>
          <br></br>
          <input className="add-movie-btn" type="submit" value="Add movie" />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
