import React , { Component} from 'react';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
//import Categories from "./components/Categories";
//import categories from "./categories.json";
import Home from './pages/Home';
import Allcoaches from './pages/Allcoaches';
import Coach from './pages/Coach';


class App extends Component {
  state = {
    logged: false,
    logginmessage: "Login | Register"
  };


  render() {
    return (
      <Router>
        <Wrapper>
          <div>
            <Nav loginmessage={this.state.loginmessage} />
            
            <Header />

            <Menu/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/coaches" component={Allcoaches} />
              {/* <Route exact path="/coaches/:category" component={Category} /> */}
              {/* <Route exact path="/coaches/register" component={Registercoach} /> */}
              {/* <Route exact path="/users/register" component={Registeruser} /> */}

            </Switch>
          </div>
        </Wrapper>
      </Router>
    );
  };
}

export default App;
