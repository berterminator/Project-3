import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";

class Allcoaches extends Component {
  

  
  render() {
    return (
      <div className="Home">
        
        
        <Wrapper>
        
        <div className="container">
            <h1>Just one coach</h1>
          </div>
        </Wrapper>
      </div>
    );
  };
}

export default Allcoaches;










componentDidMount() {
    this.getProducts();
  }
  
  getProducts = () => {
    fetch("http://localhost:4000/products")
      .then(response => response.json())
      .then(response => this.setState({products: response.data}))
      .catch(err => console.log(err))
  };