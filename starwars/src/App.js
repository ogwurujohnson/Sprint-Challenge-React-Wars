import React, { Component } from "react";
import AllCharacters from "./components/AllCharacters";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      next: false,
      prev: false,
      nextLink: '',
      prevLink: '',
      loading: false
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.setState({loading: true});
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({loading: false});
        // check if next url exists, if yes change next true, so button shows
        if (data.next) {
          this.setState({ next: true, nextLink: data.next });
        } else {
          this.setState({ next: false, nextLink: ''});
        }

        // same as next logic
        if (data.previous) {
          this.setState({ prev: true, prevLink: data.previous });
        } else {
          this.setState({ prev: false, prevLink: '' });
        }

        this.setState({ characters: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <AllCharacters {...this.state} getCharacters={this.getCharacters}/>
      </div>
    );
  }
}

export default App;
