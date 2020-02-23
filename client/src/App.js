import React, { Component } from 'react';
//import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import Categories from "./components/Categories";
import categories from "./categories.json";

class App extends Component {
  state = {
    logged: false,
    categories,
    logginmessage: "Login | Register"
  };

  
  render() {
    return (
      <div className="wholeSite">
        <Nav loginmessage={this.state.loginmessage}></Nav>
        <Header></Header>
        
        <Wrapper>
        <Menu></Menu>
        <div className="container">
        <div className="flex-grid">
          
          {
            this.state.categories.map((categories, i) =>
              <Categories 
              id={categories.id} 
              key={categories.id}
              name={categories.category} 
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

export default App;
