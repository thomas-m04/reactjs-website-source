import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, FormControl, Form, NavDropdown, Nav, Button } from 'react-bootstrap';

const navbar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink className="navbar-brand" to="/home">thomasm.codes</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavLink className="nav-link" to="/home">Features</NavLink>
            <NavLink className="nav-link" to="/home">Pricing</NavLink>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
                {props.isLoggedIn
                    ? <NavLink className="nav-link" to="#">Logged in as: { props.userName }</NavLink>
                    : <NavLink className="nav-link" to="/login">Login/Register</NavLink>
                };
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.loginReducer.isLoggedIn,
        userName: state.loginReducer.userName,
    }
}

export default connect(mapStateToProps)(navbar);



{/* <Nav.Link onClick={() => setLoggedIn("true")}><NavLink to="/login">Login { loggedIn } </NavLink></Nav.Link> */}