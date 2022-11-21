import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {

    // Using useState to get movies from localstorage or create an empty array if it doesn't exist
    const [movies, setMovies] = useState(localStorage.getItem("movies")
        ? JSON.parse(localStorage.getItem("movies")) : []);

    const navigate = useNavigate();

    const defaultImg = 'https://img.freepik.com/premium-vector/cinema-movie-background-popcorn-filmstrip-clapboard-tickets-movie-time-background_41737-248.jpg';

    // Movieobject to be sent to localstorage so that we can get access to it in display movies
    const movieObject = {
        title: '',
        img: '' || defaultImg,
        summary: '',
        longDesc: ''
    }

    // We set movieobject to movie array and save it in state and then also set the new item to localstorage
    const submitNewMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, movieObject])
        localStorage.setItem("movies", JSON.stringify([...movies, movieObject]));

        console.log(movieObject);

        navigate("/movies");
    }


    return (
        <div>
            <form onSubmit={(e) => submitNewMovie(e)}>
                <input type="text" placeholder="Title" onChange={(e) => movieObject.title = e.target.value} />
                <input type="url" placeholder="Url (optional)" onChange={(e) => movieObject.img = e.target.value} />
                <input type="text" placeholder="Short summary" onChange={(e) => movieObject.summary = e.target.value} />
                <input type="text" placeholder="Long desc" onChange={(e) => movieObject.longDesc = e.target.value} />
                <input type="submit" value="Add movie" />
            </form>
        </div>


    )
}

export default AddMovie;
