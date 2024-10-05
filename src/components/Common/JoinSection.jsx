import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../../assets/garage.jpg';

const JoinSection = () => {
  return (
    <section className="join-section" style={styles.section}>
      <Container>
        <Row className="align-items-center">
        
          <Col md={6}>
            <h2 style={styles.title}>Rejoignez-nous dès aujourd'hui !</h2>
            <p style={styles.subtitle}>
              Inscrivez-vous maintenant et simplifiez la gestion de vos réservations de véhicules avec notre application.
            </p>
            <div style={styles.buttonContainer}>
              <Button variant="dark" style={styles.button}>Inscription</Button>
              <Button variant="outline-dark" style={styles.buttonOutline}>En savoir plus</Button>
            </div>
          </Col>

         
          <Col md={6} className="text-center">
            <img src={placeholder} alt="Placeholder" style={styles.image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Styles en JS (ou tu peux les déplacer dans un fichier CSS)
const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    maxWidth:'300px'
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#555',
    maxWidth:'500px'
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom:20
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
   
  },
  buttonOutline: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: '2px solid black',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
  },
};

export default JoinSection;
