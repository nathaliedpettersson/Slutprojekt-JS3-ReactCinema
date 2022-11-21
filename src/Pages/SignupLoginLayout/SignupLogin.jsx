import React from 'react';
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";

const SignupLogin = () => {
  return (
    <div className="profile">
      <SignUp />
      <Login />
    </div>
  )
}

export default SignupLogin;