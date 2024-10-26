import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';

function MesClients() {
  const clients = useSelector((state) => state.rendezVous.rendezVous);
  const user = useSelector((state) => state.auth.user);

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const fullName = `${user.firstName} ${user.lastName}`;
  const filteredClients = clients.filter((client) => client.mechanic === fullName);

  const handleShowDetails = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

  const styles = {
    container: { padding: '20px' },
    title: { textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', color: '#333' },
    card: { cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', transition: 'transform 0.2s, box-shadow 0.2s', textAlign: 'center' },
    cardHover: { transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' },
    cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#34495e' },
    cardText: { color: '#7f8c8d', fontSize: '0.9rem' },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mes Clients</h2>
      <Container>
        <Row>
          {filteredClients.map((client, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card
                onClick={() => handleShowDetails(client)}
                style={styles.card}
                onMouseEnter={(e) => e.currentTarget.style = styles.cardHover}
                onMouseLeave={(e) => e.currentTarget.style = styles.card}
              >
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>{client.name}</Card.Title>
                  <Card.Text style={styles.cardText}>Téléphone : {client.phone}</Card.Text>
                  <Card.Text style={styles.cardText}>
                    Voiture : {client.vehicle ? `${client.vehicle.brand} ${client.vehicle.model}` : 'Aucune info'}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShowDetails(client)}>Voir Détails</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedClient && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Détails du Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Informations Client</h5>
            <p><strong>Nom :</strong> {selectedClient.name}</p>
            <p><strong>Email :</strong> {selectedClient.email}</p>
            <p><strong>Téléphone :</strong> {selectedClient.phone}</p>

            <h5>Informations Véhicule</h5>
            {selectedClient.vehicle ? (
              <>
                <p><strong>Modèle :</strong> {selectedClient.vehicle.model}</p>
                <p><strong>Marque :</strong> {selectedClient.vehicle.brand}</p>
                <p><strong>Année :</strong> {selectedClient.vehicle.year}</p>
                <p><strong>Kilométrage :</strong> {selectedClient.vehicle.mileage}</p>
                <p><strong>Composant :</strong> {selectedClient.vehicle.component}</p>
                <p><strong>Résumé :</strong> {selectedClient.vehicle.summary}</p>
              </>
            ) : (
              <p>Aucune information de véhicule disponible</p>
            )}
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
