import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";
import Coachcard from "../components/Coachcard";
import API from "../utils/API";
import axios from 'axios';


class Coachesbycategory extends Component {

  state = {
    category: "",
    coaches: []
  };

  componentDidMount() {
    console.log("YOUR PROPS IS "  + this.props.match.params.category);
    this.loadAllCoaches();
    
    
  }

  loadAllCoaches = () => {
    API.getCoachesByCategory(this.props.match.params.category)
      .then(res => {
        //console.log(res);
        this.setState({ coaches: res.data, firstname: "", lastname: "" });
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>


        <Wrapper>

          <div className="container">
            
            {this.state.coaches.map(coach => <Coachcard
            id= {coach.id}
            picture={coach.picture}
            firstname = {coach.firstname}
            lastname = {coach.lastname}
            category = {coach.category}
            personalstatement = {coach.personalstatement}
            education = {coach.education}
            
            />)}
          </div>
        </Wrapper>
      </div>
    );
  };
}

export default Coachesbycategory;
