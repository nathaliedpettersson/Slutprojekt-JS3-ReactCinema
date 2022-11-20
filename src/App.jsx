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
    <>
  <Button handleClick={goToProfile} btnText={"Add movie"} />
  {/* <DisplayMovie /> */}
    </>
  )
}

export default App;
