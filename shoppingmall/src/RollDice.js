import React, { Component } from "react";
import Dice from "./Dice";


import "./RollDice.css"
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "one", rolling: false };
    this.Roll = this.Roll.bind(this);
  }

  Roll() {
    // pick 2 rools
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // set state Roll

    this.setState({ dice1: newDice1, dice2: newDice2 , rolling: true });

    setTimeout(()=>{
        this.setState({
rolling:false
        });
    },1000)}

  render() {
    return (
      <div className="RollDice">
      <div className="RollDice-container">
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />
        
     </div>
     
        <button onClick={this.Roll} disabled={this.state.rolling}>
        {this.state.rolling ? 'Rolling' : "RollDice" }
</button>
      </div>
    );
  }
}

export default RollDice;
