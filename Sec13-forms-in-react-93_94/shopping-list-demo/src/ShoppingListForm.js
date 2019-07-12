import React, { Component } from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", qty: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addItem(this.state);
    this.setState( {name: "", qty: ""});
  }
  handleChange(evt) {
    this.setState( { [evt.target.name]: evt.target.value } );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item Name: </label>
          <input id="name"
                 name="name" 
                 value={this.state.name} 
                 onChange={this.handleChange} 
          />

          <label htmlFor="qty">Quantity: </label>
          <input id="qty"
                 name="qty" 
                 value={this.state.qty} 
                 onChange={this.handleChange}
          />

          <input type="submit" value="Add item" />
        </form>
      </div>
    );
  }
}

export default ShoppingListForm;