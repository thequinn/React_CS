import React, { Component } from "react";
import Card from "./Card";
import "./Deck.css";
import axios from "axios";

const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
    
    // alert("double quotes, deck: ", this.state.deck.deck_id);  // Print nothing
    // alert(`backticks    , deck: , ${this.state.deck.deck_id}`); // Correct
  }
  async getCard() {
    let deck_id = this.state.deck.deck_id;

    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      // let cardRes = await axios.get("https://www.deckofcardsapi.com/api/deck/n81422h85qff/draw/");
      let cardRes = await axios.get(cardUrl);
      
      if (!cardRes.data.success) {
        throw new Error("No card remaining!");
      }

      console.log(cardRes.data);
      let card = cardRes.data.cards[0];

      this.setState(st => (
        {     
          drawn: [
            ...st.drawn,
            {
              id: card.code,  
              image: card.image,
              name: `${card.value} of ${card.suit}`
            }
          ]
        }
      ));
    } catch (err) {
      alert(err);
    }
  }
  render() {  
    let cards_local = this.state.drawn.map(card => {
      return <Card key={card.id} image={card.image} name={card.name} />
    });

    return (
      <div className='Deck'>
        <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
        <h2 className='Deck-title subtitle'>♦ made with React ♦</h2>

        <hr/>
        <button className='Deck-btn' onClick={this.getCard}>
          Get Card
        </button>
        <div className='Deck-cardarea'>{cards_local}</div>
      </div>
    );
  }
}
export default Deck;
