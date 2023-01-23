import React, { Component } from "react";
import { getData } from "./data.js";
import { CardUserContainer } from "./containers";
import { ModalNewUser } from "./components/";


export default class App extends Component {
  constructor () {
    super();
    this.state = {
      users: getData(),
      onChange: false,
    } 
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
    console.log(user);
  }
      
  render() {
    return (
        <div>
          <div className="wrapper">
            <ModalNewUser onChange={this.state.onChange} addUser ={this.addUser} />
            <CardUserContainer users={this.state.users} />
          </div>
        </div>
      )
  }
};

