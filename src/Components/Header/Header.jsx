import React from "react";
import { NavLink } from 'react-router-dom';
class Header extends React.Component {

    render() {
        return (
            <header className="header-template">
                <h1>React Cinema</h1>
                <NavLink className={"navbar"} to="/">Home</NavLink>
                <NavLink className={"navbar"} to="/profile">Profile</NavLink>
            </header>
        )
    }
}

export default Header;