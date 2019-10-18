import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <div>
            <h1>Bubble Sprint</h1>
            <NavLink to='/'>
                    <button onClick={logout}>Log Out</button>
            </NavLink>
        </div>
    )
}
export default NavBar;