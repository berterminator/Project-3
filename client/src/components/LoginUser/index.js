import React from "react";
import "./style.css";

function UserLogin(props) {
    return(

        <div className="navButton" id="loginbutton">
            <li className="dropdown">
                <button type="button" id="dropdownMenu1 myDIV2" data-toggle="dropdown"
                    className="btn btn-danger btn-lg add-to-cart dropdown-toggle">Login <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right mt-2">
                    <li className="px-3 py-2">
                        <form className="form" role="form">
                            <div className="form-group">
                                {/* LOGIN INPUT ID */}
                                <input id="loginEmailInput" placeholder="Name" className="form-control form-control-sm" type="text"
                                    required="" />
                            </div>
                            <div className="form-group">
                                <input id="loginPasswordInput" placeholder="Password" className="form-control form-control-sm" type="text"
                                    required="" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </li>
                </ul>
            </li>
        </div>
    )
};





export default UserLogin;