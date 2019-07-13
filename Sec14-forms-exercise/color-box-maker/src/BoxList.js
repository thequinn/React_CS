import React, { Component } from 'react';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v4";

class BoxList extends Component {
  constructor(props) {
    super(props);

    //....sol doesn't contain calling uuid()...???...???....
    this.state = { 
      boxes: [
        { height:"4", width:"2", color:"cyan", id:uuid()},
        { height:"6", width:"3", color:"green", id:uuid() }
      ] 
    };
    this.create = this.create.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }
  create(box) {
    let newBox = {...box, id: uuid()};
    this.setState(
      { boxes: [...this.state.boxes, newBox] }
    );
  }
  render() {
    const boxes_local = this.state.boxes.map(box => {
      return <Box  
        key={box.id}
        id={box.id}
        height={box.height}
        width={box.width}
        color={box.color}
        
        //removeBox={() => this.remove(box.id)}
        //
        // NEED TO PRACTICE: ......???...???...
        // - the binding way in constructor.  This is to review how to pass an arg not directly in this.remove() here

      />
    });

    return(
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm createBox={this.create} />
        {boxes_local}
      </div>
    );
  }
}

export default BoxList;