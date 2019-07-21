import React, { Component } from 'react';
import axios from "axios";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: "", name: ""};
  }

  // Colt's Async & Await TUtorial: https://www.youtube.com/watch?v=krAYA4rvbdA
  //
  // Make componentDidMount an async function
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    // console.log(response.data);  // print data to know which fields we need

    let data = response.data;
    this.setState({ imgUrl: data.avatar_url, name: data.name });
  }

  // The very first time render() runs, the h1 and img are empty b/c componentDidMount() runs after that.  You can use a conditional to check if the h1 and img's data not yet loaded don't display empty, or use ZenQuote2.js and ZenQuote2.css to fill the gap 
  render() {
    return (
      <div>
        <h1>Github User: {this.state.name}</h1>
        <img src={this.state.imgUrl} alt="" />      
      </div>
    );
  }
}

export default GithubUserInfo;