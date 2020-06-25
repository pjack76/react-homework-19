import React, { Component } from "react";
import renderEmployee from "./components/Employee";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import * as ReactBootStrap from "react-bootstrap"
import "./style.css";

class App extends Component {
  constructor() {
    super()
    this.state = { employees }
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByNameDesc = this.sortByNameDesc.bind(this);
    this.filterTableByTitle = this.filterTableByTitle.bind(this);
  }

  sortByNameAsc() {
    
    this.state.employees.sort(function(a, b){
      if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
      if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
      return 0;
    })
    this.setState({ employees });
  }

  sortByNameDesc() {
    
    this.state.employees.sort(function(a, b){
      if(b.lastName.toLowerCase() < a.lastName.toLowerCase()) return -1;
      if(b.lastName.toLowerCase() > a.lastName.toLowerCase()) return 1;
      return 0;
    })
    
    this.setState({ employees });
  }

  
 filterTableByTitle(event){
    
    const selected = event.target.value;
    const employees = this.state.employees.filter(employee => employee.title === selected);
    console.log(employees.title);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
    
  }

  // Map over this.state.employees and render a row for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <select id="dropdown" onChange ={this.filterTableByTitle}>
          <option hidden>Please select a title to filter by</option>
          <option>Engineer</option>
          <option>Accountant</option>
          <option>Manager</option>
          <option>Salesperson</option>
          <option>Janitor</option>
          <option>Public Relations Specialist</option>
        </select>
        <ReactBootStrap.Table responsive>
          <thead>
            <tr key = {this.props.id}>
              <th>ID</th>
              <th>First Name</th>
              <th><button onClick={this.sortByNameAsc} id = "ascBtn">Asc</button>Last Name
              <button onClick={this.sortByNameDesc} id = "descBtn">Desc</button></th>
              <th>Department</th>
              <th>Title</th>
              <th>Office</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(renderEmployee)}
          </tbody>
        </ReactBootStrap.Table>
      </Wrapper>
    );
  }
}

export default App;
