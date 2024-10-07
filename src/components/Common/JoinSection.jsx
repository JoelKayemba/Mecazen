import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../../assets/garage.jpg';

const JoinSection = () => {
  const {  isAuth } = useSelector((state) => state.auth);
  const { isUser } = useSelector((state) => state.inscription);
  const navigate = useNavigate();



    const handleSinscrire = () => {
      if(isAuth || isUser){
        navigate('/client-dashboard')
      }
      else{
        navigate('/inscription')
      }
    } ;

    const handleSavoirPlus=()=>{
      navigate('/services')
    };
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
              <Button variant="dark" style={styles.button} onClick={handleSinscrire}>Inscription</Button>
              <Button variant="outline-dark" style={styles.buttonOutline} onClick={handleSavoirPlus}>En savoir plus</Button>
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
