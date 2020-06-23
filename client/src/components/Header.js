import React from "react";
import {NavLink} from "react-router-dom";


function Header() {
    return(
        <header>
            <nav>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Search" activeClassName="active">Search</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Saved" activeClassName="active">Saved</NavLink>
                </li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;