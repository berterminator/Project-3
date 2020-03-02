import React from "react";
import "./style.css";
import UserLogin from "../LoginUser/index";
import UserRegister from "../RegisterUser/index";


function Nav(props) {
    return (
      <div> 
        <ul className="nav">
              <li className="navbar-brand" href="/">Get Boost!</li>
                  <UserLogin></UserLogin>
                  <UserRegister></UserRegister>
         </ul>
      </div>
    )
};

export default Nav;