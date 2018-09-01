import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    activeStyle={{ fontWeight: 'bold' }}
                >
                    Currencies
                </NavLink>
                <NavLink
                    exact
                    to="/rollon"
                    activeClassName="active"
                    activeStyle={{ fontWeight: 'bold' }}
                >
                    Rollon
                </NavLink>
                <NavLink
                    exact
                    to="/quiz"
                    activeClassName="active"
                    activeStyle={{ fontWeight: 'bold' }}
                >
                    Quiz
                </NavLink>
                <NavLink
                    exact
                    to="/ranking"
                    activeClassName="active"
                    activeStyle={{ fontWeight: 'bold' }}
                >
                    Ranking
                </NavLink>
            </div>
        );
    }
}

export default Header;
