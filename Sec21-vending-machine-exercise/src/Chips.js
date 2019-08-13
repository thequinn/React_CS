import React, { Component } from "react";
import { Link } from "react-router-dom";

import Message from "./Message";
import chipsImg from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // innerWidth:
    // - Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar.
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    
    // console.log(this.state.bags);
    this.setState(prevState => ({
      bags: [...prevState.bags, { x, y }]
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipsImg}
        className='bag'
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of lay's chips"
      />
    ));
    return (
      <div className='Chips'>
        <Message>
          <h1>Chips Page:</h1>
          <h3>Bags of chips you want: {this.state.bags.length}</h3>
          <h3>
            <button onClick={this.handleClick}>Click</button>      
          </h3>
          <Link to='/'>Go Back</Link>        
        </Message>

        {bags}
      </div>
    );
  }
}

export default Chips;
