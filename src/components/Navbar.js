import React, { Component } from 'react';
import '../App.css'


import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class Navbar extends Component {

  state = {
    loading: true,
    person: null,
    
  }
  
  async componentDidMount()
  {
    
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
    // setInterval(this.render(), 5000);
    //console.log(data.results[0]);
  }

  // async componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  
  async fetchUsers() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);  
    const data = await response.json();
    this.setState({person: data.results[0], loading: false})
    //this.timer = setInterval(() => this.fetchUsers(), 5000);
   }

  
  render() {

    return (
      <div>
        <Link to="/">Home</Link>
        <h2>Trending FPL Players</h2>
        {
            this.state.loading || !this.state.person ?
                (
                  <div> Loading Data </div>
                )
            : <div>
              <img  src = {this.state.person.picture.large}/> <br />
              <div> Name: {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</div>
              <div> Age: {this.state.person.dob.age}</div>
              <div> City: {this.state.person.location.city}</div>
              <div> Country: {this.state.person.location.country}</div>
              </div>
              }
      </div>
    )
  }
}
export default Navbar;