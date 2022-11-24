import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {

    // Using useState to get movies from localStorage or create an empty array if it doesn't exist
    const [movies, setMovies] = useState(localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies")) : []);

    const navigate = useNavigate();

    const defaultImg = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg';

    // Movieobject to be sent to localStorage so that we can get access to it in display movies
    const movieObject = {
        title: '',
        img: '' || defaultImg,
        summary: '',
        longDesc: '',
        user: ''
    }

    // We set movieObject to movie array and save it in state and then also set the new item to localstorage
    const submitNewMovie = (e) => {
        e.preventDefault();
        const loggedInUser = localStorage.getItem('Authorized');
        movieObject.user = loggedInUser;

        setMovies([...movies, movieObject])
        localStorage.setItem("movies", JSON.stringify([...movies, movieObject]));

        navigate("/movies");
    }


    return (
        <div className="add-movie-container">
            <h3 className="add-movie-header">You're in! Add movies and get inspo from other users, it'll be fun.</h3>
            <form onSubmit={(e) => submitNewMovie(e)}>
                <input className="add-movie-input" type="text" placeholder="Title" onChange={(e) => movieObject.title = e.target.value} />
                <input className="add-movie-input" type="url" placeholder="Url (optional)" onChange={(e) => movieObject.img = e.target.value} />
                <input className="add-movie-input" type="text" placeholder="Short summary" onChange={(e) => movieObject.summary = e.target.value} />
                <input className="add-movie-input" type="text" placeholder="Description" onChange={(e) => movieObject.longDesc = e.target.value} />
                <br></br>
                <br></br>
                <input className="add-movie-btn" type="submit" value="Add movie" />
            </form>
        </div>


    )
}

export default AddMovie;
