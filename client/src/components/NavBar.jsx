import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <div className='nav'>
            <h1>Bubble Sprint</h1>
            <NavLink to='/'>
                    <button className='logout' onClick={logout}>Log Out</button>
            </NavLink>
        </div>
    )
}
export default NavBar;