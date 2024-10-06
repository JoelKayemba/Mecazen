import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import contactImage from '../assets/contact.webp'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message envoyé', formData);
  };

  return (
    <>
      <Header />
      
      {/* Section de contact */}
      <div className="contact-section" style={styles.section}>
        <Container fluid>
          <Row>
            {/* Formulaire à gauche */}
            <Col md={6} style={styles.formColumn}>
              <div style={styles.formWrapper}>
                <h1>Contactez-nous</h1>
                <p>
                  Vous avez une question ou une demande spécifique ? Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais.
                </p>
                <Form onSubmit={handleSubmit}>
                  <FloatingLabel controlId="floatingName" label="Nom" className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Votre message"
                      style={{ height: '100px' }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </FloatingLabel>

                  <Button variant="dark" type="submit" className="w-100">
                    Envoyer
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Colonne droite avec image */}
            <Col md={6} className="d-none d-md-block" style={styles.imageColumn}>
              <div style={styles.imageWrapper}>
                <img src={contactImage} alt="Contact" style={styles.image} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

// Styles en JS
const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  formColumn: {
    padding: '50px',
    backgroundColor: '#f8f9fa',
    zIndex: 2,
  },
  formWrapper: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  imageColumn: {
    padding: 0,
    margin: 0,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Contact;
