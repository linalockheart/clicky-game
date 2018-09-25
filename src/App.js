import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
// import logo from './logo.svg'; //Can I take this out?
import './App.css';
import starters from "./starters.json";

class App extends Component {
  state = {
    starters
  };

  render() {
    return (
    <div>
      {this.state.starters.map(starter => (
        <ImageCard
          id={starter.id}
          key={starter.id}
          name={starter.name}
          image={starter.image}
        />
      ))}
      </div>
    );
  }
}

export default App;
