import React from "react";
import "./style.css";

function SearchCoaches(props) {
  return (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Coach" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
    </div>
  </div>

  );
}

export default SearchCoaches;
