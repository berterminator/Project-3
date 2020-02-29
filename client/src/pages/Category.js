import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";

class Category extends Component {

  state = {
    coaches: [],
    coach: {
      firstname: "John",
      lastname: "Doe"
    }
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("/api/coaches")
      .then(response => response.json())
      .then(response => this.setState({ coaches: response.data }))
      .catch(err => console.log(err))
  };


  renderProduct = ({ id, firstname, lastname }) => <div key={id}>{firstname} {lastname} dollars</div>

  render() {
    const { coaches } = this.state;
    return (
      <div className="App">
        {coaches.map(this.renderProduct)}

        

      </div>
    );
  }
}

export default Category;
