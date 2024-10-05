import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import placeholder from '../../assets/reservation.jpg';  

const ReservationSection = () => {
  return (
    <section className="reservation-section" style={styles.section}>
      <Container>
        <Row className="align-items-center">
         
          <Col md={5}>
            <div style={styles.textContainer}>
              <h2 style={styles.title}>
                Gérez facilement vos réservations chez votre mécanicien avec notre application intuitive.
              </h2>
              <p style={styles.subtitle}>
                Notre application Web vous permet de gérer vos réservations de manière simple et efficace.
                Créez un compte, planifiez vos rendez-vous et suivez l'historique de vos réparations en quelques clics.
              </p>
              <ul style={styles.featureList}>
                <li>
                  <FaCheckCircle style={styles.icon} /> Création de compte rapide et sécurisée.
                </li>
                <li>
                  <FaCheckCircle style={styles.icon} /> Gestion facile de vos véhicules et réparations.
                </li>
                <li>
                  <FaCheckCircle style={styles.icon} /> Planifiez vos rendez-vous en toute simplicité.
                </li>
              </ul>
            </div>
          </Col>

          
          <Col md={7} className="text-center">
            <img src={placeholder} alt="Placeholder" style={styles.image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#f8f9fa',  
  },
  textContainer: {
    maxWidth: '450px',  
    margin: '0',   
},     
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#555',
  },
  featureList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  icon: {
    color: '#000',
    marginRight: '10px',
  },
  image: {
    width: '100%',  
    height: '500px',
  }
};

export default ReservationSection;
