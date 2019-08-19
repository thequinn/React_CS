import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogDetails.css';

class DogDetails extends Component {
  render() {
    let {dog} = this.props;

    return(
      <div className='container'>
        <div className="DogDetails row justify-content-center mt-5">
          <div className='col-11 col-lg-5'>
            <div className='DogDetails-card card'>
              <img className='card-img-top' src={dog.src} alt={dog.name} />
              <div class="card-body">
                <h5 class="card-title">{dog.name}</h5>
                <h4 className='card-subtitle text-muted'>{dog.age} year(s) old</h4>

              </div>
              <ul class="list-group list-group-flush">
                {dog.facts.map((fact, index) => 
                  <li class="list-group-item">{fact}</li>                
                )}
                
              </ul>
              <div class="card-body">
                <Link to='/dogs' className='btn btn-info'>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;