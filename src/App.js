import React, { Component } from "react";
import './App.css';
import employees from "./employees.json"
import Card from "./components/card.js"

class App extends Component {
  state = {
    employees
  };

  render(){
    
    return( 
      <div>
        {this.state.employees.map(employees =>( 
          <Card 
            name = {employees.name}
            occupation = {employees.occupation}
            hobbies = {employees.hobbies}/>
        ))}
      </div>
      



    )
  }



}

export default App;
