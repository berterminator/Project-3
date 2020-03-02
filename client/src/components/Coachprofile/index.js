import React from "react";
import "./style.css";

function Coachprofile(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={props.picture}
                        className="card-img-top" alt={`${props.firstname} ${props.lastname}`} />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-header">{`${props.firstname}  ${props.lastname}`}</h3>
                        <h4 className="card-title">{props.category} coach</h4>
                        <p className="card-text">{props.personalstatement}</p>
                        <p><i className="fas fa-graduation-cap"></i> {props.education}</p>
                        <p className="card-text">
                            <a href=""><i className="fab fa-linkedin"></i></a> | <a href=""><i className="fab fa-twitter-square"></i></a> | <a href=""><i className="fas fa-globe"></i></a>   
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Coachprofile;