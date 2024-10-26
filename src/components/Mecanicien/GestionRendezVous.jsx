import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { updateRendezVous } from '../../redux/Actions/rendezVousAction';
import { addFacture } from '../../redux/Actions/factureAction';

function ProchainsRendezVous() {
  const dispatch = useDispatch();
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous);
  const user = useSelector((state) => state.auth.user);

  const [showModal, setShowModal] = useState(false);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);
  const [isConfirming, setIsConfirming] = useState(true);
  const [formDetails, setFormDetails] = useState({ reason: '', duration: '', price: '' });
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const fullName = `${user.firstName} ${user.lastName}`;
  const filteredRendezVous = rendezVous.filter(rdv => rdv.mechanic === fullName);

  const handleShowModal = (rdv, confirming) => {
    setSelectedRendezVous(rdv);
    setIsConfirming(confirming);
    setFormDetails({ reason: '', duration: '', price: '' });
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
      price: formDetails.price,
      duration: formDetails.duration,
    };

    dispatch(updateRendezVous(updatedRdv.id, updatedRdv));

    if (isConfirming) {
      const factureData = {
        ...updatedRdv,
        factureDate: new Date().toLocaleDateString(),
      };
      dispatch(addFacture(factureData));
    }

    handleCloseModal();
  };

  const styles = {
    container: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', margin: '40px' },
    header: { marginBottom: '15px', color: '#333' },
    table: { marginBottom: '20px' },
    modalTitle: { fontWeight: 'bold', fontSize: '1.2rem', color: '#333' },
    buttonDetails: { marginRight: '10px' },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Prochains Rendez-vous</h2>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Véhicule</th>
            <th>Réparation</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRendezVous.map((rdv) => (
            <tr key={rdv.id}>
              <td>{rdv.date}</td>
              <td>{rdv.name}</td>
              <td>{rdv.vehicle ? `${rdv.vehicle.brand} ${rdv.vehicle.model} (${rdv.vehicle.year})` : 'Aucune info'}</td>
              <td>{rdv.reparation?.title}</td>
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
                    <Form.Label>Prix ($)</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formDetails.price}
                      onChange={handleInputChange}
                      placeholder="Prix"
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

      {selectedRendezVous && (
        <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Détails du Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nom du Client :</strong> {selectedRendezVous.name}</p>
            <p><strong>Email :</strong> {selectedRendezVous.email}</p>
            <p><strong>Téléphone :</strong> {selectedRendezVous.phone}</p>

            <h5>Informations Véhicule</h5>
            {selectedRendezVous.vehicle ? (
              <>
                <p><strong>Modèle :</strong> {selectedRendezVous.vehicle.model}</p>
                <p><strong>Marque :</strong> {selectedRendezVous.vehicle.brand}</p>
                <p><strong>Année :</strong> {selectedRendezVous.vehicle.year}</p>
                <p><strong>Kilométrage :</strong> {selectedRendezVous.vehicle.mileage}</p>
              </>
            ) : (
              <p>Aucune information de véhicule disponible</p>
            )}
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
