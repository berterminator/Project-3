import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";
import Coachcard from "../components/Coachcard";
import API from "../utils/API";

class Allcoaches extends Component {

  state = {
    coaches: [],
    firstname: "",
    lastname: ""
  };

  componentDidMount() {
    this.loadAllCoaches();
  }

  loadAllCoaches = () => {
    API.getAllCoaches()
      .then(res => {
        console.log(res);
        this.setState({ coaches: res.data, firstname: "", lastname: "" });
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="Home">


        <Wrapper>

          <div className="container">
            <h1>All the coaches!</h1>
            {this.state.coaches.map(coach => <Coachcard
            id= {coach.id}
            picture={coach.picture}
            firstname = {coach.firstname}
            lastname = {coach.lastname}
            
            />)}
          </div>
        </Wrapper>
      </div>
    );
  };
}

export default Allcoaches;
