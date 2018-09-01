import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//import './Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavItem>React-Bootstrap</NavItem>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            activeStyle={{ fontWeight: 'bold' }}
                        >
                            Currencies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            to="/rollon"
                            activeClassName="active"
                            activeStyle={{ fontWeight: 'bold' }}
                        >
                            Rollon
                        </NavLink>
                    </NavItem>
                    <NavDropdown title="Quiz" id="basic-nav-dropdown">
                        <MenuItem>
                            <NavLink
                                exact
                                to="/quizlogo"
                                activeClassName="active"
                                activeStyle={{ fontWeight: 'bold' }}
                            >
                                QuizLogo
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                exact
                                to="/quizsymbol"
                                activeClassName="active"
                                activeStyle={{ fontWeight: 'bold' }}
                            >
                                QuizSymbol
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                exact
                                to="/quizprice"
                                activeClassName="active"
                                activeStyle={{ fontWeight: 'bold' }}
                            >
                                QuizPrice
                            </NavLink>
                        </MenuItem>
                    </NavDropdown>
                    <NavItem>
                        <NavLink
                            exact
                            to="/ranking"
                            activeClassName="active"
                            activeStyle={{ fontWeight: 'bold' }}
                        >
                            Ranking
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            // <div className="header">
            //     <NavLink
            //         exact
            //         to="/"
            //         activeClassName="active"
            //         activeStyle={{ fontWeight: 'bold' }}
            //     >
            //         Currencies
            //     </NavLink>
            //     <NavLink
            //         exact
            //         to="/rollon"
            //         activeClassName="active"
            //         activeStyle={{ fontWeight: 'bold' }}
            //     >
            //         Rollon
            //     </NavLink>
            //     <NavLink
            //         exact
            //         to="/quiz"
            //         activeClassName="active"
            //         activeStyle={{ fontWeight: 'bold' }}
            //     >
            //         Quiz
            //     </NavLink>
            //     <NavLink
            //         exact
            //         to="/ranking"
            //         activeClassName="active"
            //         activeStyle={{ fontWeight: 'bold' }}
            //     >
            //         Ranking
            //     </NavLink>
            // </div>
        );
    }
}

export default Header;
