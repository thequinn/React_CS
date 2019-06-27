import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };

    // Binding "this" in constructor
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("REMOVING!");
    //num is an event obj if using ln-21 in BetterNuberItem.js
    console.log("num: ", num);

    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {
    let nums = this.state.nums.map(n => (
      <BetterNumberItem key={n} value={n} remove={this.remove} />
      // Notice: this.remove has no arg, n. (Compare to NumberList.js)
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
