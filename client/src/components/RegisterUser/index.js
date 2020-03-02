import React from "react";
import "./style.css";

function UserRegister(){

return (
        <div className="navButton" id="registerbutton">
            <li className="dropdown">
                <button type="button" id="dropdownMenu1 myDIV2" data-toggle="dropdown"
                    className="btn btn-warning btn-lg add-to-cart dropdown-toggle">Register <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right mt-2">
                    <li className="px-3 py-2">
                        <form className="form" role="form">
                            <div className="form-group">
                                {/* REGISTER INPUT ID */}
                                <input id="registerEmailInput" placeholder="Name" className="form-control form-control-sm" type="text"
                                    required="" />
                            </div>
                            <div className="form-group">
                                <input id="registerPasswordInput" placeholder="Password" className="form-control form-control-sm" type="text"
                                    required="" />
                            </div>
                            <div className="form-group">
                                <button  type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>
                        </form>
                    </li>
                </ul>
            </li>
        </div>
    )
};

export default UserRegister;