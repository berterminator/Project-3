import React from 'react';
import "./style.css";


function Categories(props) {
    return (
        
            <div className="col">
                <img className="categoryPic" src={props.image} alt={props.category} />
                <div className="card-body">
                    <h5 className="card-title">{props.category}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Search</a>
                </div>

            </div>
       
    )
}

export default Categories;