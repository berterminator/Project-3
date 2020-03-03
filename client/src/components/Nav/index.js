import React from "react";
import "./style.css";
import UserLogin from "../LoginUser/index";
import UserRegister from "../RegisterUser/index";


function Nav(props) {
    return (
        <ul className="nav">
            <li className="navbar-brand" href="/">Get Boost!
            </li>
                <UserLogin></UserLogin>
                <UserRegister></UserRegister>
       </ul>
    )
};

export default Nav;