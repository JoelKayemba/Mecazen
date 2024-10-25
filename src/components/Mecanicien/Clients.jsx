import React, { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';

function MesClients() {
  const clients = [
    { nom: 'Jean Dupont', email: 'jean.dupont@example.com', telephone: '0612345678', voiture: 'Toyota Corolla', adresse: '123 Rue Principale, Paris', historique: 'Historique des réparations' },
    { nom: 'Marie Curie', email: 'marie.curie@example.com', telephone: '0612345679', voiture: 'Renault Clio', adresse: '456 Avenue des Champs, Lyon', historique: 'Historique des réparations' },
    { nom: 'Paul Martin', email: 'paul.martin@example.com', telephone: '0612345680', voiture: 'Peugeot 308', adresse: '789 Boulevard de la Mer, Marseille', historique: 'Historique des réparations' },
    { nom: 'Alice Durand', email: 'alice.durand@example.com', telephone: '0612345681', voiture: 'Citroën C3', adresse: '101 Rue de Lille, Nice', historique: 'Historique des réparations' },
    { nom: 'Marc Lemaitre', email: 'marc.lemaitre@example.com', telephone: '0612345682', voiture: 'Volkswagen Golf', adresse: '202 Avenue Victor Hugo, Bordeaux', historique: 'Historique des réparations' },
    { nom: 'Claire Rousseau', email: 'claire.rousseau@example.com', telephone: '0612345683', voiture: 'Ford Fiesta', adresse: '303 Rue de la Paix, Lille', historique: 'Historique des réparations' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Afficher la modale des détails
  const handleShowDetails = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  // Fermer la modale
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

  // Styles en ligne
  const styles = {
    container: {
      padding: '20px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    card: {
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      transition: 'transform 0.2s, box-shadow 0.2s',
      textAlign: 'center',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
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

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Clients</h2>
      <Container>
        <Row>
          {clients.map((client, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card
                onClick={() => handleShowDetails(client)}
                style={styles.card}
                onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
                onMouseLeave={(e) => e.currentTarget.style = styles.card}
              >
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>{client.nom}</Card.Title>
                  <Card.Text style={styles.cardText}>Téléphone : {client.telephone}</Card.Text>
                  <Card.Text style={styles.cardText}>Voiture : {client.voiture}</Card.Text>
                  <Button variant="primary" onClick={() => handleShowDetails(client)}>Voir Détails</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modale pour afficher les détails du client */}
      {selectedClient && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Détails du Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nom :</strong> {selectedClient.nom}</p>
            <p><strong>Email :</strong> {selectedClient.email}</p>
            <p><strong>Téléphone :</strong> {selectedClient.telephone}</p>
            <p><strong>Voiture :</strong> {selectedClient.voiture}</p>
            <p><strong>Adresse :</strong> {selectedClient.adresse}</p>
            <p><strong>Historique :</strong> {selectedClient.historique}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default MesClients;
