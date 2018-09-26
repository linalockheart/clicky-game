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

    const chosenPokemon = this.state.starters.find(name => name.id === id);
    console.log(chosenPokemon); //showing clicked as false

    if (chosenPokemon.clicked === false) { 
      chosenPokemon.clicked = true;
      console.log(chosenPokemon); //showing clicked as true YES!
      const starters = this.state.starters.sort((a,b) => 0.5 - Math.random());
      this.setState({ starters: starters })
      this.handleIncrement();
    }

    else {
      if (this.state.yourScore > this.state.highScore) {
        this.setState({highScore: this.state.yourScore});
      }
      this.setState({yourScore: 0});
      alert("Sorry, game over!");
    }

  };

  handleIncrement = () => {
    this.setState({ yourScore: this.state.yourScore + 1 });
  };

  render() {
    return (
    <div>
    <Nav
    yourScore={this.state.yourScore}
    highScore={this.state.highScore}
    yourGuess={this.state.yourGuess}
    />
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
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
