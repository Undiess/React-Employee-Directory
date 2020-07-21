import React, { Component } from "react";
import './App.css';
import employees from "./employees.json"
import Card from "./components/card.js"

class App extends Component {
  state = {
    employees
  };

  filterFrontEnd = () => { 
    const employees = this.state.employees.filter(employee => employee.occupation === "Front End Developer");
    this.setState({employees})
  };

  filterBackEnd = () => { 
    const employees = this.state.employees.filter(employee => employee.occupation === "Back End Developer");
    this.setState({employees})
  };

  render(){
    return( 
      <div>
        <nav className="navbar navbar-light bg-light" >
          <div>
            <button onClick = {this.filterBackEnd}type="button" className="btn btn-outline-secondary"> Filter Back End</button>
            <button onClick = {this.filterFrontEnd} type="button" className="btn btn-outline-secondary"> Filter Front End</button>
          </div>
          
        </nav>
        
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
