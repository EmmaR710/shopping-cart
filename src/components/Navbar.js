import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const BootstrapNavbar = ()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>CDL Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/cart">My cart</Link></Nav.Link>
                </Nav>
        </Navbar>
    )
};

export default BootstrapNavbar;

