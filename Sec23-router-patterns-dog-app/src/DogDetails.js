import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogDetails.css';

class DogDetails extends Component {
  render() {
    let {dog} = this.props;

    return(
      // Bootstrap Grid System 

      // Moved to wrap around <Routes dogs={this.props.dogs} /> in App.js
      // <div className='container'>
        <div className="DogDetails row justify-content-center mt-5">
          <div className='col-11 col-lg-5'>
            <div className='DogDetails-card card'>
              <img className='card-img-top' src={dog.src} alt={dog.name} />
              <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <h4 className='card-subtitle text-muted'>{dog.age} year(s) old</h4>

              </div>
              <ul className="list-group list-group-flush">
                {dog.facts.map((fact, index) => 
                  <li className="list-group-item" key={index}>{fact}</li>                
                )}                
              </ul>
              <div className="card-body">
                <Link to='/dogs' className='btn btn-info'>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      // </div>
    );
  }
}

export default DogDetails;