import React from "react";
import "./style.css";
//import API from "../utils/API";

function Coachcard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.firstname + props.lastname} src={props.picture} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.firstname + props.lastname}</h5>

            </div>
        </div>

    )

};

export default Coachcard;