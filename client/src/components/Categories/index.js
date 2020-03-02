import React from 'react';
import "./style.css";


function Categories(props) {
    return (
        
            <div className="col">
                <img className="categoryPic" src={props.image} alt={props.category} />
                <div className="card-body">
                    
                    {/* <p className="card-text">{props.description}</p> */}
                    <a href={`/coaches${props.url}`} className="btn btn-primary"><h3 className="card-title">{props.category}</h3></a>
                </div>

            </div>
       
    )
}

export default Categories;