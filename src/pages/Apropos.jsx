import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import image from '../assets/apropos.jpg'; 
import image2 from '../assets/equipe.jpeg'; 


const Apropos = () => {
  return (
    <>
      <Header />
      
      {/* Section principale avec image et contenu */}
      <div className="apropos-section">
        <Container fluid className="py-5" style={styles.section}>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-left p-5">
              <h1 className="mb-4" style={styles.title}>À propos de MECAZEN</h1>
              <p style={styles.text}>
                MECAZEN est une plateforme innovante dédiée à la gestion des services automobiles, facilitant la
                relation entre les clients et les mécaniciens. Notre objectif est d'offrir une solution simple et efficace
                pour l'entretien de votre véhicule, tout en garantissant un service de qualité.
              </p>
              <p style={styles.text}>
                Que vous ayez besoin d'un diagnostic rapide, d'une réparation complexe ou d'une révision complète,
                MECAZEN vous met en relation avec les meilleurs professionnels du secteur.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <Image src={image} fluid className="shadow-lg rounded" alt="À propos de MECAZEN" />
            </Col>
          </Row>
        </Container>
      </div>
    
      {/* Notre mission */}
      <Container fluid className="py-5" style={styles.missionSection}>
        <Row>
          <Col md={12} className="text-center">
            <h2 style={styles.sectionTitle}>Notre Mission</h2>
            <p style={styles.sectionText}>
              Chez MECAZEN, notre mission est de fournir un service de maintenance automobile accessible, fiable, et rapide,
              tout en connectant les clients avec des mécaniciens qualifiés. Nous croyons fermement en la transparence et en la qualité,
              et nous travaillons pour rendre chaque interaction aussi simple et agréable que possible.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Notre équipe */}
      <Container fluid className="py-5" style={styles.teamSection}>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left p-5">
            <h2 style={styles.sectionTitle}>Notre Équipe</h2>
            <p style={styles.sectionText}>
              Notre équipe est composée de mécaniciens qualifiés et de spécialistes en gestion automobile avec
              des années d'expérience dans l'industrie. Nous nous engageons à offrir un service de haute qualité
              en travaillant avec des professionnels qui partagent notre passion pour l'excellence.
            </p>
            <p style={styles.sectionText}>
              Chaque membre de notre équipe est sélectionné pour ses compétences techniques, son dévouement
              et son engagement à satisfaire les besoins de nos clients.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={image2} fluid className="shadow-lg rounded" alt="Notre équipe MECAZEN" />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Styles en JS pour les sections
const styles = {
  section: {
    background: 'linear-gradient(to right, #f7f7f7 50%, #fff 50%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  missionSection: {
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  sectionText: {
    fontSize: '1.1rem',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto',
    paddingBottom: '20px',
  },
  teamSection: {
    backgroundColor: '#fff',
    clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)',
  },
};

export default Apropos;
