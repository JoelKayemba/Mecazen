import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/log.jpg'
import '../../App.css'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={{ zIndex: 10, position: 'relative' }}>
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />{' '}
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/A_propos">À propos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          {/* Boutons Connexion et Inscription à droite */}
          <Nav className="ms-lg-auto mt-2 mt-lg-0 d-flex align-items-center">
            <Button as={Link} to="/login" variant="outline-light" className="me-2 mb-2 mb-lg-0">
              Connexion
            </Button>
            <Button as={Link} to="/inscription" variant="light" className="mb-2 mb-lg-0">
              Inscription
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
