import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicule, editVehicule, deleteVehicule } from '../../redux/Actions/vehiculeAction';

function GestionVehicule() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState(null);
  const [newVehicle, setNewVehicle] = useState({ model: '', brand: '', year: '', mileage: '' });
  const vehicules = useSelector((state) => state.vehicule.vehicules);
  const dispatch = useDispatch();

  // Ouvrir le modal pour ajout ou édition
  const handleShowModal = (vehicle = null) => {
    if (vehicle) {
      setNewVehicle(vehicle);
      setIsEditing(true);
      setEditingVehicleId(vehicle.id);
    } else {
      setNewVehicle({ model: '', brand: '', year: '', mileage: '' });
      setIsEditing(false);
      setEditingVehicleId(null);
    }
    setShowModal(true);
  };

  // Fermer le modal
  const handleCloseModal = () => {
    setShowModal(false);
    setNewVehicle({ model: '', brand: '', year: '', mileage: '' });
  };

  // Gérer le changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  // Ajouter ou éditer un véhicule
  const handleAddOrEditVehicle = () => {
    if (newVehicle.model && newVehicle.brand && newVehicle.year && newVehicle.mileage) {
      if (isEditing) {
        // Modifier le véhicule existant
        
        dispatch(editVehicule({ id: editingVehicleId, ...newVehicle }));
        
      } else {
        // Ajouter un nouveau véhicule
        const newId = vehicules.length + 1;
        dispatch(addVehicule({ id: newId, ...newVehicle }));
      }
      handleCloseModal();
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  // Supprimer un véhicule
  const handleDeleteVehicle = (id) => {
    dispatch(deleteVehicule(id));
  };

  return (
    <Container fluid style={styles.container}>
      <h2 style={styles.header}>Gestion de Véhicules</h2>

      {/* Section d'actions */}
      <Row className="mb-4" style={styles.actionRow}>
        <Col>
          <Button variant="primary" style={styles.addButton} onClick={() => handleShowModal()}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter un Véhicule
          </Button>
        </Col>
      </Row>

      {/* Liste des véhicules */}
      <Row>
        <Col>
          <Card style={styles.card}>
            <Card.Body>
              <Table responsive bordered hover>
                <thead style={styles.tableHead}>
                  <tr>
                    <th>#</th>
                    <th>Modèle</th>
                    <th>Marque</th>
                    <th>Année</th>
                    <th>Kilométrage</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicules && vehicules.map((vehicle) => (
                    <tr key={vehicle.id}>
                      <td>{vehicle.id}</td>
                      <td>{vehicle.model}</td>
                      <td>{vehicle.brand}</td>
                      <td>{vehicle.year}</td>
                      <td>{vehicle.mileage}</td>
                      <td>
                        <Button 
                          variant="warning" 
                          size="sm" 
                          style={styles.actionButton} 
                          onClick={() => handleShowModal(vehicle)}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Modifier
                        </Button>{' '}
                        <Button 
                          variant="danger" 
                          size="sm" 
                          style={styles.actionButton} 
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal d'ajout ou d'édition de véhicule */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Modifier le Véhicule' : 'Ajouter un Nouveau Véhicule'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Modèle</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={newVehicle.model}
                onChange={handleChange}
                placeholder="Entrez le modèle"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marque</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={newVehicle.brand}
                onChange={handleChange}
                placeholder="Entrez la marque"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Année</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={newVehicle.year}
                onChange={handleChange}
                placeholder="Entrez l'année"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kilométrage</Form.Label>
              <Form.Control
                type="text"
                name="mileage"
                value={newVehicle.mileage}
                onChange={handleChange}
                placeholder="Entrez le kilométrage"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAddOrEditVehicle}>
            {isEditing ? 'Enregistrer les Modifications' : 'Ajouter'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f6f9',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#34495e',
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#1e90ff',
    borderColor: '#1e90ff',
    fontWeight: 'bold',
  },
  card: {
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  tableHead: {
    backgroundColor: '#1e90ff',
    color: '#ffffff',
  },
  actionButton: {
    marginRight: '10px',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default GestionVehicule;
