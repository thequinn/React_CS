import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    // Using array's indexes as keys
    // Note: Best Correct method will be taught later.
    this.state = { nums: [1, 2, 2, 2, 3, 4, 5, 5] };

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
    // Using array's indexes as keys
    let nums = this.state.nums.map((n, idx) => (
      <BetterNumberItem key={idx} value={n} remove={this.remove} />
    ));

    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
