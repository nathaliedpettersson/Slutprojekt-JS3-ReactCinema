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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Layout />}>
  <Route index element={<App />}></Route>
  <Route path="/profile" element={<SignupLogin />}></Route>
  <Route path="*" element={<NotFound />}></Route>
</Route>

{/* Get /profile and input for signup/signin layout here */}


{/* Get everything related to movies here */}
<Route></Route>

  </Routes>
  </BrowserRouter>
);




