import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import axios from 'axios';
import uuid from 'uuid/v4';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    let jokes = [];

    try {
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: {Accept: "application/json"}
        });
        // console.log(res);

        jokes.push({ 
          id: uuid(),
          votes: 0,
          text: res.data.joke 
        });
        // console.log(jokes);
      }
      this.setState({ jokes: jokes });
    } 
    catch(err) {
      console.error(err)
    }
  }

  handleVote(id, delta) {
    // console.log(`id: ${id}    delta: ${delta}`);
        
    this.setState(st => ({
      jokes: st.jokes.map(j => 
        j.id === id ? {...j, votes: j.votes + delta} : j
      )
    }));
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
            <div>            
              <Joke key={j.id} id={j.id} votes={j.votes} text={j.text} handleVote={this.handleVote} />
            </div>
          ))}
        </div>        
      </div>
    );
  }
}

export default JokeList;