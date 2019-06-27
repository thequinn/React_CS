import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  // This remove() is called by the child comp, NumberItem, which modifies the state properties, ie. nums[], of this comp (parent comp)
  remove(num) {
    this.setState(st => ({
      // Recall from Sec08, React State Patterns. We setState using pure func's instead of mutating the existing state's prop's, ie. array.  Here, filter() returns a new array that removes centain num's from the old array.
      nums: st.nums.filter(n => n !== num)
    }));
  }

  render() {

    let nums = this.state.nums.map(n => (
      /*
      - Cons: When we do "this.remove(n)" inline, a new copy of remove() is created when React calls render()
      - FIX: See ln-9 in BetterNumberList.js
      */
      <NumberItem value={n} remove={() => this.remove(n)} />
      // Notice: this.remove() has an arg, n. (compare to BetterNumberList.js)
    ));

    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
