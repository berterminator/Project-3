import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";
import Categories from "../components/Categories";
import categories from "./categories.json";

class Home extends Component {
  state = {
    categories,
  };

  
  render() {
    return (
      <div className="Home">
        
        
        <Wrapper>
        
        <div className="container">
        <div className="flex-grid">
          
          {
            this.state.categories.map((categories, i) =>
              <Categories 
              id={categories.id} 
              key={categories.id}
              category={categories.category} 
              image={categories.image}
              description={categories.description} 
              url={categories.url}  />
            )
          }
          </div>
          </div>
        </Wrapper>
      </div>
    );
  };
}

export default Home;
