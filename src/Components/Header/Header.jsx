import React from "react";
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header className="header-template">
        <img src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png" alt="Grit-logo"></img>
        <NavLink className={"navbar"}to="/">Home</NavLink>
        <NavLink className={"navbar"}to="/profile">Profile</NavLink>
      </header>
        )
    } 

}

export default Header;