import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Components/Button/Button";

const App = () => {

const navigate = useNavigate();

const goToProfile = () => {
  navigate("/profile")
}

  return (
    <>
  <Button handleClick={goToProfile} btnText={"Add movie"} />
    </>
  )
}

export default App;

// Have link on profile-text and button for "add movies" in here that will both navigate to /profile