// TableauDeBordMecanicien.jsx
import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCalendarAlt, faUsers, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';



function TableauDeBordMecanicien() {
     

  const dashboardItems = [
    { title: 'Tableau de bord' , icon: faChartLine, description: 'Vue d\'ensemble de vos activités et statistiques.' },
    { title: 'Mon Planning', icon: faCalendarAlt, description: 'Gérez et consultez vos rendez-vous planifiés.' },
    { title: 'Mes Clients', icon: faUsers, description: 'Consultez la liste de vos clients et leurs informations.' },
    { title: 'Documents', icon: faFileAlt, description: 'Gérez les documents liés aux réparations et factures.'},
    { title: 'Historique', icon: faHistory, description: 'Consultez l\'historique de vos réparations.'},
  ];

  

  return (
    
    <Container fluid style={styles.container}>
      <h2 style={styles.header}>Bienvenue sur votre Tableau de Bord Mécanicien</h2>
      <Row className="mt-4">
        {dashboardItems.map((item, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card 
              style={styles.card} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Card.Body>
                <FontAwesomeIcon icon={item.icon} style={styles.icon} />
                <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
                <Card.Text style={styles.cardText}>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#f4f6f9',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#34495e',
  },
  card: {
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textAlign: 'center',
    
  },
  icon: {
    fontSize: '3rem',
    color: '#000b21',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#34495e',
  },
  cardText: {
    color: '#7f8c8d',
    fontSize: '0.9rem',
  },
};

export default TableauDeBordMecanicien;
