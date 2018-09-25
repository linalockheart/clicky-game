import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import './App.css';
import starters from "./starters.json";
import Nav from "./components/Nav/Nav";

class App extends Component {
  state = {
    starters,
    yourScore: 0,
    highScore: 0,
    checkImage: "",
    clicked: []
  };

  render() {
    return (
    <div>
    <Nav/>
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
