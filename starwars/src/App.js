import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      next: false,
      prev: false,
      nextLink: '',
      prevLink: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <AllCharacters characters={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
