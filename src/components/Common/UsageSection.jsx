import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaUserPlus, FaCar, FaCalendarAlt } from 'react-icons/fa';

const UsageSection = () => {
  return (
    <section className="usage-section" style={styles.section}>
      <Container>
        {/* Titre de la section */}
        <p style={styles.subTitle}>Réservations</p>
        <h2 style={styles.title}>Découvrez comment utiliser notre application facilement</h2>
        <p style={styles.description}>
          Notre application simplifie la gestion de vos réservations. Suivez ces étapes pour profiter pleinement de nos services.
        </p>

        <Row className="text-start">
          
          <Col md={4}>
            <FaUserPlus style={styles.icon} />
            <h4 style={styles.featureTitle}>Créez votre compte en quelques clics</h4>
            <p style={styles.featureSubtitle}>Inscrivez-vous rapidement pour accéder à toutes les fonctionnalités.</p>
          </Col>

       
          <Col md={4}>
            <FaCar style={styles.icon} />
            <h4 style={styles.featureTitle}>Ajoutez vos véhicules facilement</h4>
            <p style={styles.featureSubtitle}>Ajoutez manuellement vos véhicules ou via l'API NHTSA.</p>
          </Col>

        
          <Col md={4}>
            <FaCalendarAlt style={styles.icon} />
            <h4 style={styles.featureTitle}>Planifiez vos rendez-vous en toute simplicité</h4>
            <p style={styles.featureSubtitle}>Choisissez une date et une heure qui vous conviennent.</p>
          </Col>
        </Row>

        <div className="text-start mt-4">
          <Button variant="dark" style={styles.button}>Commencer</Button>
          <Button variant="outline-dark" style={styles.buttonOutline}>En savoir plus</Button>
        </div>
      </Container>
    </section>
  );
};


const styles = {
  section: {
    padding: '70px 0',
    backgroundColor: '#fff',
  },
  subTitle: {
    fontSize: '1rem',
    fontWeight: 'normal',
    textAlign: 'start',
    marginBottom: '10px',
  },
  title: {
    textAlign: 'start',
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    maxWidth:'600px'
  },
  description: {
    textAlign: 'start',
    marginBottom: '40px',
    fontSize: '1.1rem',
    color: '#555',
    maxWidth:'600px'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '15px',
    color: '#000',
    textAlign: 'start',
    justifycontent:'left'
  },
  featureTitle: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '15px',
    maxWidth:'300px',
    textAlign: 'start',
  },
  featureSubtitle:{
    maxWidth:'300px',
  },
  button: {
    marginRight: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
  },
  buttonOutline: {
    padding: '10px 20px',
    fontSize: '1rem',
    border: '2px solid black',
  }
};

export default UsageSection;
