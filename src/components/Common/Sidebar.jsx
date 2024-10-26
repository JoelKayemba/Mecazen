// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser as logoutAuth } from '../../redux/Actions/AuthentificationAction';
import { logoutUser as logoutInscription } from '../../redux/Actions/InscriptionAction';
import logo from '../../assets/MZ.png';

function Sidebar({ links }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.auth);
  const { isUser } = useSelector((state) => state.inscription);

  // Fonction de déconnexion dynamique
  const handleLogout = () => {
    if (isAuth) {
      dispatch(logoutAuth());
    } else if (isUser) {
      dispatch(logoutInscription());
    }
    navigate('/');
  };

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

      {/* Lien de déconnexion en bas */}
      <Nav className="flex-column" style={styles.logoutNav}>
        <Nav.Link style={styles.logoutLink} onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.logoutIcon} />
          Déconnexion
        </Nav.Link>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
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
  },
  logoutNav: {
    width: '100%',
    paddingLeft: '10px',
  },
  logoutLink: {
    color: '#ff4d4f', // Rouge pour le lien de déconnexion
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s',
  },
  logoutIcon: {
    marginRight: '10px',
  },
};

export default Sidebar;
