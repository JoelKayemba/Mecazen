import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function ProchainsRendezVous() {
  const [rendezVous, setRendezVous] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);
  const [isConfirming, setIsConfirming] = useState(true);
  const [formDetails, setFormDetails] = useState({ reason: '', duration: '', cost: '' });
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/users') // Remplacez par votre API réelle
      .then((response) => {
        const vehicles = [
          'Toyota Corolla 2015',
          'Renault Clio 2018',
          'Peugeot 308 2017',
          'Ford Fiesta 2019',
          'Volkswagen Golf 2020',
          'Honda Civic 2016',
          'BMW Série 3 2018',
          'Audi A4 2019',
        ];
        
        const appointments = response.data.users.map((user, index) => {
          const baseDate = new Date();
          const appointmentDate = new Date(baseDate.setDate(baseDate.getDate() + index));

          const randomHour = Math.floor(Math.random() * 9) + 8;
          const randomMinute = Math.floor(Math.random() * 60);
          const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)]; // Sélection aléatoire de véhicule

          return {
            id: user.id,
            client: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phone: user.phone,
            vehicle: randomVehicle,
            date: appointmentDate.toLocaleDateString('fr-FR'),
            time: `${String(randomHour).padStart(2, '0')}:${String(randomMinute).padStart(2, '0')}`,
            status: 'En attente',
          };
        });
        setRendezVous(appointments);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  const handleShowModal = (rdv, confirming) => {
    setSelectedRendezVous(rdv);
    setIsConfirming(confirming);
    setFormDetails({ reason: '', duration: '', cost: '' });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRendezVous(null);
  };

  const handleShowDetails = (rdv) => {
    setSelectedRendezVous(rdv);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedRendezVous(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSaveDecision = () => {
    const updatedRdv = {
      ...selectedRendezVous,
      status: isConfirming ? 'Confirmé' : 'Refusé',
      reason: formDetails.reason,
      duration: formDetails.duration,
      cost: formDetails.cost,
    };
    setRendezVous(rendezVous.map(rdv => (rdv.id === selectedRendezVous.id ? updatedRdv : rdv)));
    handleCloseModal();
  };

  const styles = {
    container: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '40px',
    },
    header: {
      marginBottom: '15px',
      color: '#333',
    },
    table: {
      marginBottom: '20px',
    },
    modalTitle: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#333',
    },
    buttonDetails: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Prochains Rendez-vous</h2>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Client</th>
            <th>Véhicule</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendezVous.map((rdv) => (
            <tr key={rdv.id}>
              <td>{rdv.date}</td>
              <td>{rdv.time}</td>
              <td>{rdv.client}</td>
              <td>{rdv.vehicle}</td>
              <td>{rdv.status}</td>
              <td>
                <Button variant="info" style={styles.buttonDetails} onClick={() => handleShowDetails(rdv)}>Détails</Button>
                {rdv.status === 'En attente' && (
                  <>
                    <Button variant="success" onClick={() => handleShowModal(rdv, true)}>Confirmer</Button>{' '}
                    <Button variant="danger" onClick={() => handleShowModal(rdv, false)}>Refuser</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modale pour confirmer ou refuser */}
      {selectedRendezVous && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>
              {isConfirming ? 'Confirmer le Rendez-vous' : 'Refuser le Rendez-vous'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {isConfirming ? (
                <>
                  <Form.Group>
                    <Form.Label>Durée estimée (heures)</Form.Label>
                    <Form.Control
                      type="number"
                      name="duration"
                      value={formDetails.duration}
                      onChange={handleInputChange}
                      placeholder="Durée en heures"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Coût estimé (€)</Form.Label>
                    <Form.Control
                      type="number"
                      name="cost"
                      value={formDetails.cost}
                      onChange={handleInputChange}
                      placeholder="Coût en euros"
                    />
                  </Form.Group>
                </>
              ) : (
                <Form.Group>
                  <Form.Label>Raison du refus</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="reason"
                    value={formDetails.reason}
                    onChange={handleInputChange}
                    placeholder="Spécifiez la raison du refus"
                  />
                </Form.Group>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Annuler</Button>
            <Button variant="primary" onClick={handleSaveDecision}>
              {isConfirming ? 'Confirmer' : 'Refuser'}
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modale pour afficher les détails du client */}
      {selectedRendezVous && (
        <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Détails du Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nom du Client :</strong> {selectedRendezVous.client}</p>
            <p><strong>Email :</strong> {selectedRendezVous.email}</p>
            <p><strong>Téléphone :</strong> {selectedRendezVous.phone}</p>
            <p><strong>Véhicule :</strong> {selectedRendezVous.vehicle}</p>
            <p><strong>Date :</strong> {selectedRendezVous.date}</p>
            <p><strong>Heure :</strong> {selectedRendezVous.time}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetailsModal}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ProchainsRendezVous;
