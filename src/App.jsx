import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.jsx';
import './App.css'


class App extends Component {
  constructor() {
    super();

    this.dataURL = "https://jsonplaceholder.typicode.com/users";
    this.state = {
      robotok: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch(this.dataURL)
      .then((response) => response.json())
      .then((users) => this.setState({ robotok: users}))
      .catch((error) => {
        console.warn(`The following error occured: ${error}`);
        alert("Oops! Something went wrong. Try again in a few minutes ;)");
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }
  
  render() {
    const filteredRobots = this.state.robotok.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robotok.length === 0) {
      return <h1>Loading</h1>
    } else {
      return(
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots}/>
        </div>
      );
    }
  }
}

export default App;