import React from "react";
import "./Nav.css";

const Nav = () => (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h3 className="navbar-text">Starter Pokemon Clicky Game</h3>
    <span className="navbar-text your-score">Your Score: {props.yourScore}</span>
    <span className="navbar-text high-score">High Score: {props.highScore}</span>
</nav>

);

export default Nav;