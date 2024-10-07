// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/MZ.png'

function Sidebar({ links }) {
  return (
    <div style={styles.sidebar}>
      <p style={styles.logo}>
      <img
            src={logo}
            alt="Logo"
            width="80px"
            height="80px"
            className="d-inline-block align-top"
          />
      </p>
      <Nav className="flex-column" style={styles.nav}>
        {links.map((link, index) => (
          <Nav.Link key={index} style={styles.navLink} onClick={link.onClick}>
            <FontAwesomeIcon icon={link.icon} style={styles.icon} />
            {link.name}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#000b21',
    color: '#ffffff',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  nav: {
    width: '100%',
    paddingLeft: '10px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s',
  },
  icon: {
    marginRight: '10px',
  }
};

export default Sidebar;
