import React from "react";
import {
} from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Search">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Saved">Saved</a>
                </li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;