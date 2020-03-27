import React, { Component } from "react";
import "./Dice.css";
class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        <i className={`fas fa-dice-${this.props.face} `}></i>
      </div>
    );
  }
}

export default Dice;
