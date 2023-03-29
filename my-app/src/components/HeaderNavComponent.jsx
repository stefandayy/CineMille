import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const HeaderNavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >CineMille</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/schedule" className="nav-link" >Film</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default HeaderNavComponent