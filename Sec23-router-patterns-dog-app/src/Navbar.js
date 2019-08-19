import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li className='nav-item' key={dog.name}>
        <NavLink exact to={`/dogs/${dog.name}`} className='nav-link'>
          {dog.name}
        </NavLink>
      </li>
    ));

    return (

      // Add a Navbar using Bootstrap
      // - https://getbootstrap.com/docs/4.2/components/navbar/
      //
      // Note: Colt replaced "navbar-light bg-light" by "navbar-dark bg-dark"
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

        <Link className='navbar-brand' to='/dogs'>
          Dog App
        </Link>

        {/* This button will show up as the hamburger icon when the browser window resizes to small */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact to='/dogs' className='nav-link'>
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>

      </nav>
    );
  }
}
export default Navbar;
