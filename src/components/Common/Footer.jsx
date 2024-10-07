import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row>
          {/* Logo et description */}
          <Col md={3} style={styles.col}>
            <h5 style={styles.title}>MecaZen</h5>
            <p style={styles.description}>
              Réservez facilement vos rendez-vous de réparation automobile en ligne. Nos services sont rapides, fiables et de qualité.
            </p>
          </Col>

          {/* Liens de navigation */}
          <Col md={3} style={styles.col}>
            <h5 style={styles.title}>Liens rapides</h5>
            <ul style={styles.linkList}>
              <li><a href="/" style={styles.link}>Accueil</a></li>
              <li><a href="/services" style={styles.link}>Services</a></li>
              <li><a href="/contact" style={styles.link}>Contact</a></li>
              <li><a href="/about" style={styles.link}>À propos</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3} style={styles.col}>
            <h5 style={styles.title}>Inscription à la Newsletter</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  style={styles.input}
                />
              </Form.Group>
              <Button variant="light" style={styles.button}>S'inscrire</Button>
            </Form>
          </Col>

          {/* Réseaux sociaux */}
          <Col md={3} style={styles.col}>
            <h5 style={styles.title}>Suivez-nous</h5>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" style={styles.icon}><FaFacebookF /></a>
              <a href="https://instagram.com" style={styles.icon}><FaInstagram /></a>
              <a href="https://twitter.com" style={styles.icon}><FaTwitter /></a>
              <a href="https://linkedin.com" style={styles.icon}><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <p style={styles.copyright}>© 2024 MecaZen. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


const styles = {
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '40px 0',
    
  },
  col: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1rem',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'block',
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '5px',
    border: 'none',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    fontWeight: 'bold',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
  copyright: {
    color: '#ccc',
    fontSize: '0.9rem',
  }
};

export default Footer;
