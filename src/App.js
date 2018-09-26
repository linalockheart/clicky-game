import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import starters from "./starters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

class App extends Component {

  state = {
    starters: starters,
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
    clicked: []
  };

  handleClick = id => {

    let clicked = this.state.starters.clicked;

    if (clicked === false) {
      console.log("clicked"); //not showing up, not sure why
      this.handleIncrement();
      this.setState({ clicked: true });
    }
    else {
      console.log("Sorry, game over!");
      //call function to reset game
      //make a game over modal or something
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
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
