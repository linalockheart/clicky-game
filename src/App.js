import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import './App.css';
import starters from "./starters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    starters,
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
    imgClicked: []
  };

  render() {
    return (
    <div>
    <Nav/>
    <Wrapper>
    <Title>Click each starter Pokemon once to earn points.
    <br></br>
    Click the same Pokemon twice and it's game over.
    </Title>
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
