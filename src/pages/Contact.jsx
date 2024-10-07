import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel, Toast } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importation du CSS de Leaflet
import L from 'leaflet'; // Pour l'icône de marqueur par défaut
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import contactImage from '../assets/contact.webp';

// Configuration de l'icône de marqueur pour qu'elle s'affiche correctement
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);

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
    
    // Afficher la notification de succès
    setShowToast(true);
    
    // Réinitialiser les champs du formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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

          {/* Section de la carte */}
          <Row className="mt-5">
            <Col>
              <h2 className="text-center mb-4">Notre Localisation</h2>
              <MapContainer
                center={[48.4528212, -68.5054982]} 
                zoom={13}
                style={{ height: '400px', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[48.8566, 2.3522]}>
                  <Popup>
                    Nous sommes ici ! Venez nous rendre visite.
                  </Popup>
                </Marker>
              </MapContainer>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Notification de succès */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          minWidth: '250px',
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Votre message a été envoyé avec succès !</Toast.Body>
      </Toast>

      <Footer />
    </>
  );
};


const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  formColumn: {
    padding: '50px',
    backgroundColor: 'white',
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
