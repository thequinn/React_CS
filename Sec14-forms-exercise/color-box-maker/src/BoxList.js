import React, { Component } from 'react';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boxes: [] 
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }
  create(box) {
    this.setState(
      { boxes: [...this.state.boxes, box] }
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
        
        // removeBox={() => this.remove(box.id)}
        // removeBox={this.remove.bind(this, box.id)}
        removeBox={this.remove}
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