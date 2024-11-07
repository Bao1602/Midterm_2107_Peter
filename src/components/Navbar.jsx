import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
const Navibar = () => (
<Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="/" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>React-Bootstrap</Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto" style={{fontSize: '2rem'}}>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/checkout">Check out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
);

export default Navibar;