import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { updateRendezVous, validateModification } from '../../redux/Actions/rendezVousAction';
import { addFacture } from '../../redux/Actions/factureAction';

function ProchainsRendezVous() {
  const dispatch = useDispatch();
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous);
  const user = useSelector((state) => state.auth.user);

  const [showModal, setShowModal] = useState(false);
  const [showRefuseModal, setShowRefuseModal] = useState(false);
  const [showModificationModal, setShowModificationModal] = useState(false);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);
  const [formDetails, setFormDetails] = useState({ reason: '', duration: '', price: '' });

  const fullName = `${user.firstName} ${user.lastName}`;
  const filteredRendezVous = rendezVous.filter((rdv) => rdv.mechanic === fullName);

  const handleShowModal = (rdv) => {
    setSelectedRendezVous(rdv);
    setFormDetails({ reason: '', duration: '', price: '' });
    setShowModal(true);
  };

  const handleShowRefuseModal = (rdv) => {
    setSelectedRendezVous(rdv);
    setFormDetails({ reason: '' });
    setShowRefuseModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRendezVous(null);
  };

  const handleCloseRefuseModal = () => {
    setShowRefuseModal(false);
    setSelectedRendezVous(null);
  };

  const handleShowModificationModal = (rdv) => {
    setSelectedRendezVous(rdv);
    setShowModificationModal(true);
  };

  const handleCloseModificationModal = () => {
    setShowModificationModal(false);
    setSelectedRendezVous(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleAcceptModification = () => {
    if (selectedRendezVous) {
      dispatch(validateModification(selectedRendezVous.id, true));
      handleCloseModificationModal();
    }
  };

  const handleRefuseModification = () => {
    if (selectedRendezVous) {
      dispatch(validateModification(selectedRendezVous.id, false, formDetails.reason));
      handleCloseModificationModal();
    }
  };

  const handleSaveDecision = (isConfirming) => {
    if (selectedRendezVous) {
      const updatedRdv = {
        ...selectedRendezVous,
        status: isConfirming ? 'Confirmé' : 'Refusé',
        price: formDetails.price? formDetails.price : '0',
        duration: formDetails.duration,
        reason: !isConfirming ? formDetails.reason : undefined,
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
      handleCloseRefuseModal();
    }
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
            <th>Modification</th>
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
              <td>{rdv.modificationStatus || 'Pas de modification'}</td>
              <td>
                {rdv.status === 'En attente' && (
                  <>
                    <Button variant="success" onClick={() => handleShowModal(rdv)}>Confirmer</Button>{' '}
                    <Button variant="danger" onClick={() => handleShowRefuseModal(rdv)}>Refuser</Button>
                  </>
                )}
                {rdv.status === 'Confirmé' && rdv.modificationStatus === 'Modification en attente' && (
                  <>
                    <Button variant="info" style={{ marginRight: '5px' }} onClick={() => handleShowModificationModal(rdv)}>
                      Voir Modification
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for accepting a rendezvous */}
      {selectedRendezVous && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Confirmer le Rendez-vous</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Annuler</Button>
            <Button variant="primary" onClick={() => handleSaveDecision(true)}>Confirmer</Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modal for refusing a rendezvous */}
      {selectedRendezVous && (
        <Modal show={showRefuseModal} onHide={handleCloseRefuseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Refuser le Rendez-vous</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseRefuseModal}>Annuler</Button>
            <Button variant="danger" onClick={() => handleSaveDecision(false)}>Refuser</Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modal for viewing modification details */}
      {selectedRendezVous && (
        <Modal show={showModificationModal} onHide={handleCloseModificationModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Détails de la Modification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Date Modifiée :</strong> {selectedRendezVous.date || 'Non spécifiée'}</p>
            {selectedRendezVous.vehicle ? (
              <>
                <p><strong>Modèle du Véhicule :</strong> {selectedRendezVous.vehicle.model}</p>
                <p><strong>Marque du Véhicule :</strong> {selectedRendezVous.vehicle.brand}</p>
                <p><strong>Année du Véhicule :</strong> {selectedRendezVous.vehicle.year}</p>
                <p><strong>Kilométrage :</strong> {selectedRendezVous.vehicle.mileage}</p>
              </>
            ) : (
              <p>Aucune information de véhicule modifiée</p>
            )}
            <p><strong>Description Modifiée :</strong> {selectedRendezVous.description || 'Non spécifiée'}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModificationModal}>Annuler</Button>
            <Button variant="success" onClick={handleAcceptModification}>Accepter Modification</Button>
            <Button variant="danger" onClick={handleRefuseModification}>Refuser Modification</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default ProchainsRendezVous;
