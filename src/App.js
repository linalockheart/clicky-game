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
    highScore: 21,
    yourGuess: "",
    clicked: []
  };

  handleClick = id => {
    console.log(id);

    const chosenPokemon = this.state.starters.find(name => name.id === id);
    console.log(chosenPokemon); //showing as false YES!

    if (chosenPokemon.clicked === false) { //this isn't working
    console.log("clicked"); 
    chosenPokemon.clicked = true;
    console.log(chosenPokemon); //showing as true
    const starters = this.state.starters.sort((a,b) => 0.5 - Math.random());
    this.setState({ starters: starters })
    this.handleIncrement();
    }
  

    else {
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
          key={starter.id} //do i need the key for this one?
          name={starter.name}
          image={starter.image}
          clicked={starter.clicked}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          randomizeCards={this.randomizeCards}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
