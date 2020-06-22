import React from "react";
import {
    Link
} from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
        <ul>
            <li>
            <Link to="/">Search</Link>
            </li>
            <li>
            <Link to="/saved">Saved</Link>
            </li>
        </ul>
        </nav>

        </header>
    )
}
export default Header;