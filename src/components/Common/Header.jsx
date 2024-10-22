import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/MZ.png'
import '../../App.css'

const Header = () => {

  const [showDashboard, setShowDashboard]= useState(false);
  const [showMechanicDashboard,setShowMechanicDashboard] = useState(false);
  const {  isAuth } = useSelector((state) => state.auth);
  const { isUser } = useSelector((state) => state.inscription);
  const {isMechanic} = useSelector((state) => state.auth)
  useEffect(()=>{
    if( isAuth || isUser){
      setShowDashboard(true);
    }
    if(isMechanic ) {
      setShowMechanicDashboard(true);
    }
  },[isAuth,isUser]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" >
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="80px"
            height="80px"
            className="d-inline-block align-top"
          />{' '}
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/A_propos">À propos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/FAQ">FAQ</Nav.Link>
          </Nav>
          {/* Boutons Connexion et Inscription à droite */}
          <Nav className="ms-lg-auto mt-2 mt-lg-0 d-flex align-items-center">
            { showDashboard && !isMechanic ? (
             
              <Button as={Link} to="/client-dashboard" variant="success" className="mb-2 mb-lg-0">
                Acceder au tableau de bord
              </Button>
            ):showMechanicDashboard?(
              <Button as={Link} to="/mechanic-dashboard" variant="success" className="mb-2 mb-lg-0">
              Acceder au tableau de bord mecanicien
            </Button>
            ):

            (
              <>
              <Button as={Link} to="/login" variant="outline-light" className="me-2 mb-2 mb-lg-0">
              Connexion
              </Button>
              <Button as={Link} to="/inscription" variant="light" className="mb-2 mb-lg-0">
                Inscription
              </Button>
              </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
