import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import './App.css';
import starters from "./starters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    starters,
    yourScore: 0,
    highScore: 0,
    checkGuess: "",
    imgClicked: []
  };

  render() {
    return (
    <div>
    <Nav/>
    <Wrapper>
      {this.state.starters.map(starter => (
        <ImageCard
          id={starter.id}
          key={starter.id}
          name={starter.name}
          image={starter.image}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
