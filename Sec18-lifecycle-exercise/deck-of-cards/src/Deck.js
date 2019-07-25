import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null }
  }
  async componentDidMount() {
    try {
      const deck = await axios.get(API_URL);
      this.setState({ deck: deck.data });
      console.log(deck.data);      
    } catch(err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        <button type="button">New Card</button>
        <Card />
      </div>
    );
  }
}

export default Deck;