import React, { Component } from 'react'

class Timer2 extends Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log('IN CONSTRUCTOR');
  }
  componentDidMount() {
    console.log("IN componentDidMount()");
    this.timerID = setInterval(() => {
      this.setState({time: new Date()});
    }, 3000);
  }
  componentDidUpdate() {
    console.log("IN componentDidUpdate()");
  }
  render() {
    console.log("IN RENDER");
    return (
      <h1>{this.state.time.getSeconds()}</h1>
    );
  }
}

export default Timer2;
