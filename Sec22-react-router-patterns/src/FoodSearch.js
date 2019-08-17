import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }
  handleClick() {
    alert("Saved to DB");
    this.props.history.push(`/food/${this.state.query}`);
  }
  render() {
    return (
      <div>
        <h1>Food Search Page</h1>
        
        <input 
          type='text' 
          placeholder='Enter Food Name' 
          value={this.state.query}
          onChange={this.handleChange}
        />
        <br/>   
        <Link to={`/food/${this.state.query}`}>Search Food</Link> 
        <br/>           
        <button onClick={this.handleClick}>Save Food</button>
      </div>
    );
  }
}

export default FoodSearch;