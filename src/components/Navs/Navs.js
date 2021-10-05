import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navs.css'

const Navs = () => {
    return (
        <div>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand className="header text-warning" href="#home">E-21 Language Club</Navbar.Brand>
                    <Nav className="ms-auto">
                    <NavLink style={{textDecoration: "none", paddingRight: "25px"}} className="text-white nav-items" to="/home">Home</NavLink>
                    <NavLink style={{textDecoration: "none", paddingRight: "25px"}} className="text-white" to="/courses">Courses</NavLink>
                    <NavLink style={{textDecoration: "none", paddingRight: "25px"}} className="text-white" to="/about">About Us</NavLink>
                    <NavLink style={{textDecoration: "none"}} className="text-white" to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navs;