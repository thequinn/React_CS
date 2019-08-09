import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let jokes = [];

    try {
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: {Accept: "application/json"}
        });
        // console.log(res);

        jokes.push(res.data.joke);
        // console.log(jokes);
      }
      this.setState({ jokes: jokes });
    } 
    catch(err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className="JokeList">
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button className='JokeList-getmore'>
          Fetch Jokes
        </button>
        </div>                

        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>        
      </div>
    );
  }
}

export default JokeList;