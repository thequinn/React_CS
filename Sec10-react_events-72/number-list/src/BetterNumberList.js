import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("REMOVING!");
    console.log("num: ", num);

    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    let nums_local = this.state.nums.map(n =>
      <BetterNumberItem key={n} value={n} remove={this.remove} />
    );

    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums_local}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
