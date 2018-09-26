import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import './App.css';
import starters from "./starters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    starters: starters,
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
    imgClicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    else {
      console.log("not sure what to put here yet lol");
    }

  }

  handleIncrement = () => {
    this.setState({ yourScore: this.state.yourScore + 1 });
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
          clicked={starter.clicked}
          yourScore={this.state.yourScore}
          handleIncrement={this.handleIncrement}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
