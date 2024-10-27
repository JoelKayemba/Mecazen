import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { modifyRendezVous, annulerRendezVous } from '../../redux/Actions/rendezVousAction';

function HistoriqueReparation() {
  const dispatch = useDispatch();
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous);
  const user = useSelector((state) => state.inscription?.user || state.auth?.user);

  const [showModal, setShowModal] = useState(false);
  const [selectedRendezVous, setSelectedRendezVous] = useState(null);
  const [modificationDetails, setModificationDetails] = useState({
    vehicle: { brand: '', model: '', year: '', mileage: '' },
    date: '',
    description: ''
  });

  const userRendezVous = rendezVous.filter((reservation) => reservation.name === user?.username);

  const handleOpenModal = (rdv) => {
    setSelectedRendezVous(rdv);
    setModificationDetails({
      vehicle: rdv.vehicle || { brand: '', model: '', year: '', mileage: '' },
      date: rdv.date,
      description: rdv.description
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRendezVous(null);
  };

  const handleModificationSubmit = () => {
    const modifiedRendezVous = {
      ...selectedRendezVous,
      vehicle: modificationDetails.vehicle,
      date: modificationDetails.date,
      description: modificationDetails.description,
      modificationStatus: 'Modification en attente'
    };

    dispatch(modifyRendezVous(modifiedRendezVous.id, modifiedRendezVous));
    handleCloseModal();
  };

  const handleAnnulerRendezVous = (id) => {
    dispatch(annulerRendezVous(id));
  };

  const handleVehicleChange = (field, value) => {
    setModificationDetails({
      ...modificationDetails,
      vehicle: {
        ...modificationDetails.vehicle,
        [field]: value
      }
    });
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.header}>Historique des Réparations</h2>
      
      {userRendezVous.length > 0 ? (
        <Table striped bordered hover style={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Véhicule</th>
              <th>Réparation</th>
              <th>Mécanicien</th>
              <th>Description</th>
              <th>Mode de Paiement</th>
              <th>Status</th>
              <th>Raison</th>
              <th>Modification Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userRendezVous.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.date}</td>
                <td>{reservation.vehicle ? `${reservation.vehicle.brand} ${reservation.vehicle.model} (${reservation.vehicle.year})` : ''}</td>
                <td>{reservation.reparation?.title}</td>
                <td>{reservation.mechanic}</td>
                <td>{reservation.description}</td>
                <td>{reservation.paymentMethod}</td>
                <td>{reservation.reason || 'Aucune raison fournie'}</td>
                <td>{reservation.status}</td>
                <td>{reservation.modificationStatus || 'Aucune modification'}</td>
                <td>
                  {reservation.status !="Refusé" && ( <Button variant="info" onClick={() => handleOpenModal(reservation)}>Modifier</Button>)}
                 
                  <p></p>
                  {reservation.status === 'En attente' && (
                    <Button variant="danger" onClick={() => handleAnnulerRendezVous(reservation.id)} style={{ marginLeft: '10px' }}>
                      Annuler
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Aucune réservation trouvée dans l'historique.</p>
      )}

      {/* Modal pour modifier un rendez-vous */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le Rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h5>Informations Véhicule</h5>
            <Form.Group controlId="modificationVehicleBrand">
              <Form.Label>Marque</Form.Label>
              <Form.Control
                type="text"
                value={modificationDetails.vehicle.brand}
                onChange={(e) => handleVehicleChange('brand', e.target.value)}
                placeholder="Marque du véhicule"
              />
            </Form.Group>
            <Form.Group controlId="modificationVehicleModel">
              <Form.Label>Modèle</Form.Label>
              <Form.Control
                type="text"
                value={modificationDetails.vehicle.model}
                onChange={(e) => handleVehicleChange('model', e.target.value)}
                placeholder="Modèle du véhicule"
              />
            </Form.Group>
            <Form.Group controlId="modificationVehicleYear">
              <Form.Label>Année</Form.Label>
              <Form.Control
                type="text"
                value={modificationDetails.vehicle.year}
                onChange={(e) => handleVehicleChange('year', e.target.value)}
                placeholder="Année du véhicule"
              />
            </Form.Group>
            <Form.Group controlId="modificationVehicleMileage">
              <Form.Label>Kilométrage</Form.Label>
              <Form.Control
                type="text"
                value={modificationDetails.vehicle.mileage}
                onChange={(e) => handleVehicleChange('mileage', e.target.value)}
                placeholder="Kilométrage du véhicule"
              />
            </Form.Group>
            <Form.Group controlId="modificationDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={modificationDetails.date}
                onChange={(e) => setModificationDetails({ ...modificationDetails, date: e.target.value })}
                placeholder="Entrez la date"
              />
            </Form.Group>
            <Form.Group controlId="modificationDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={modificationDetails.description}
                onChange={(e) => setModificationDetails({ ...modificationDetails, description: e.target.value })}
                placeholder="Décrivez les modifications"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Annuler</Button>
          <Button variant="primary" onClick={handleModificationSubmit}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#343a40',
  },
  table: {
    marginTop: '20px',
  },
};

export default HistoriqueReparation;
