import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink
          className="navitem"
          exact
          to="/"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Currencies
        </NavLink>
        <NavLink
          className="navitem"
          exact
          to="/quizlogo"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          Quiz
        </NavLink>
      </div>
    );
  }
}

export default Header;
