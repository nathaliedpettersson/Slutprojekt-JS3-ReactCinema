import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Components/Button/Button";
// import DisplayMovie from "./Pages/DisplayMovies/DisplayMovies";

const App = () => {

const navigate = useNavigate();

const goToProfile = () => {
  navigate("/profile")
}

  return (
    <div className="main-page">
      <h1 className="main-page-header">CINEMA APP REACT</h1>
  <Button handleClick={goToProfile} btnText={"Add movie"} />
  {/* <DisplayMovie /> */}
    </div>
  )
}

export default App;
