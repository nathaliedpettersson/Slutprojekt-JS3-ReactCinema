import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS file
import './style/index.css';

// JSX-files
import Layout from './Pages/Layout/Layout';
import App from './App';
import NotFound from './Pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Layout />}>
  <Route index element={<App />}></Route>
  <Route path="*" element={<NotFound />}></Route>
</Route>

{/* Get /profile and input for signup/signin layout here */}
<Route></Route>

{/* Get everything related to movies here */}
<Route></Route>

  </Routes>
  </BrowserRouter>
);




