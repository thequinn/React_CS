import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => (
      { nums: st.nums.filter(n => n !== num) }
    ));
  }

  render() {
    let nums_local = this.state.nums.map(n =>
      <NumberItem value={n} remove={() => this.remove(n)} />
    );

    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums_local}</ul>
      </div>
    );
  }
}

export default NumberList;
