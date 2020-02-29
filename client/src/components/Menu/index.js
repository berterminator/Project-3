import React from "react";
import "./style.css";

function Menu(props) {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">Why coaching?
                <a className="nav-link active" href="#"></a>
            </li>
            <li className="nav-item">How does it work?
                <a className="nav-link active" href="#"></a>
            </li>
            <li className="nav-item">I am a coach
                <a className="nav-link active" href="#"></a>
            </li>
        </ul>
    )
};

export default Menu;