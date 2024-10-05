import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../../assets/car.jpg';
import image2 from '../../assets/rendezvous.jpg';
import image3 from '../../assets/historique.jpg';

const FeaturesSection = () => {
  return (
    <section className="features-section" style={styles.section}>
      <Container>
        
        <h2 style={styles.title}>Découvrez les fonctionnalités essentielles de notre application de réservation en ligne.</h2>
        
        <Row>
          
          <Col md={4} className="text-center">
            <img src={image1} alt="Gérer vos véhicules" style={styles.image} />
            <h4 style={styles.featureTitle}>Gérez vos véhicules facilement avec notre interface intuitive et conviviale.</h4>
            <p>Ajoutez, modifiez et suivez vos véhicules en toute simplicité.</p>
            <Button variant="link" style={styles.link}>En savoir plus &gt;</Button>
          </Col>

          
          <Col md={4} className="text-center">
            <img src={image2} alt="Planifiez vos rendez-vous" style={styles.image} />
            <h4 style={styles.featureTitle}>Planifiez vos rendez-vous en quelques clics grâce à notre calendrier intégré.</h4>
            <p>Choisissez la date et l'heure qui vous conviennent le mieux.</p>
            <Button variant="link" style={styles.link}>Réserver &gt;</Button>
          </Col>

         
          <Col md={4} className="text-center">
            <img src={image3} alt="Consultez l'historique" style={styles.image} />
            <h4 style={styles.featureTitle}>Consultez l'historique de vos réparations pour un suivi optimal.</h4>
            <p>Gardez une trace de toutes vos interventions et de leur coût.</p>
            <Button variant="link" style={styles.link}>Historique &gt;</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: '#fff', 
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    maxWidth: '800px',  
    margin: '30px auto',   
  },
  image: {
    width: '100%',
    maxWidth: '400px', 
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  link: {
    color: '#000',
    fontWeight: 'bold',
    textDecoration: 'none',
  }
};

export default FeaturesSection;
