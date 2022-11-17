import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS file
import './style/index.css';

// JSX-files
import Layout from './Pages/Layout/Layout';
import App from './App';
import NotFound from './Pages/NotFound/NotFound';
import SignupLogin from './Pages/SignupLoginLayout/SignupLogin';
import AddMovie from './Pages/AddMovie/AddMovie';
import DisplayMovie from './Pages/DisplayMovies/DisplayMovies';
import MovieItem from './Pages/MovieItem/MovieItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Layout />}>
  <Route index element={<App />}></Route>
  <Route path="/profile" element={<SignupLogin />}></Route>
  <Route path="*" element={<NotFound />}></Route>

  <Route path="/movies" element={<DisplayMovie />}></Route>
  <Route path="/movies/addMovie" element={<AddMovie />}></Route>
  <Route path="/movies/:title" element={<MovieItem />}></Route>

</Route>

  </Routes>
  </BrowserRouter>
);




