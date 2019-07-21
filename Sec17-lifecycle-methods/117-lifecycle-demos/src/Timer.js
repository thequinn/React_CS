import React, { Component } from 'react'

class Timer extends Component {
  
/* Step-1 */
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log('IN CONSTRUCTOR');
  }
/* Step-3 */
  componentDidMount() {
    console.log("IN COMPONENT DID MOUNT");

    // - Every 1000 mill-isec, run setState().  
    // - Capture the timerID so the timer can be stopped later on.
    this.timerID = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }
/* 
  Step-2, 
  Step-4,5,6,..... triggered by the setState() every 1000 milli-sec in componentDidMount().  The main thing is after the first render(), other render()'s are triggered by setState().
*/
  render() {
    console.log("IN RENDER");
    return (
      <h1>{this.state.time.getSeconds()}</h1>
    );
  }
}

export default Timer;