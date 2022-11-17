import React from 'react';
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";

// Have profile-clickable link here too that takes user back to "homepage"

const SignupLogin = () => {
    return (
      <div className="profile">
        <SignUp />
        <Login />
      </div>
    )
}

export default SignupLogin;