import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  render() {  
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center'>Dog List</h1>

        <div className="container">
          <div className="row">
            {this.props.dogs.map(dog => 
              <div className="Dog col-lg-4 text-center" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </div> 
            )}           
          </div>
        </div>

      </div>
    );
  }
}

export default DogList;