import React, { Component } from 'react';
//import './App.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Nav from "./components/Nav";
//import Header from "./components/Header";
//import Menu from "./components/Menu";
import Wrapper from "../components/Wrapper";
import Coachcard from "../components/Coachcard";
import Coachprofile from "../components/Coachprofile";
import API from "../utils/API";

class Allcoaches extends Component {

  state = {
    coach: [],
    firstname: "",
    lastname: ""
  };

  componentDidMount() {
    console.log("YOUR PROPS IS "  + this.props.match.params.id);
    this.loadAllCoaches();
  }

  loadAllCoaches = () => {
    API.getCoach(this.props.match.params.id)
      .then(res => {
        //console.log(res);
        this.setState({ coach: res.data, firstname: "", lastname: "" });
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="Home">


        <Wrapper>

          <div className="container">
            
            {this.state.coach.map(coach => <Coachprofile
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

export default Allcoaches;
