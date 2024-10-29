import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicule, editVehicule, deleteVehicule, searchRecalls, resetRecalls, searchVehicleByVin } from '../../redux/Actions/vehiculeAction';

const generateId = (vehicules) => vehicules.length + 1;

function GestionVehicule() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState(null);
  const [vin, setVin] = useState('');
  const [newVehicle, setNewVehicle] = useState({ model: '', brand: '', year: '', mileage: '' });

  const vehicules = useSelector((state) => state.vehicule.vehicules);
  const vinData = useSelector((state) => state.vehicule.vinData);
  const error = useSelector((state) => state.vehicule.error);
  const recalls = useSelector((state) => state.vehicule.recalls);
  const user = useSelector((state) => state.inscription?.user || state.auth?.user);
  const dispatch = useDispatch();

  const userVehicules = vehicules.filter((vehicule) => vehicule.userId === user?.id);

  useEffect(() => {
    if (vinData) {
      setNewVehicle({
        model: vinData.Model || '',
        brand: vinData.Make || '',
        year: vinData.ModelYear || '',
        mileage: newVehicle.mileage,
      });
    }
  }, [vinData]);

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

  const handleCloseModal = () => {
    setShowModal(false);
    setNewVehicle({ model: '', brand: '', year: '', mileage: '' });
    setVin('');
    dispatch(resetRecalls());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({ ...newVehicle, [name]: value });
  };

  const handleVinChange = (e) => {
    setVin(e.target.value);
  };

  const handleSearchByVin = () => {
    if (vin) {
      dispatch(searchVehicleByVin(vin));
    } else {
      alert('Veuillez entrer un VIN valide');
    }
  };

  const handleSearchByModel = () => {
    const { brand, model, year } = newVehicle;
    if (brand && model && year) {
      dispatch(searchRecalls(brand, model, year));
    } else {
      alert('Veuillez remplir la marque, le modèle et l\'année');
    }
  };

  const handleSubmit = () => {
    const vehicleData = {
      ...newVehicle,
      userId: user?.id,
      id: !isEditing ? generateId(vehicules) : editingVehicleId,
      recalls: recalls.map((recall) => ({
        component: recall.Component,
        summary: recall.Summary,
      })),
    };

    dispatch(isEditing ? editVehicule(editingVehicleId, vehicleData) : addVehicule(vehicleData));
    handleCloseModal();
  };

  return (
    <Container fluid style={styles.container}>
      <h2 style={styles.header}>Gestion de Véhicules</h2>

      <Row className="mb-4" style={styles.actionRow}>
        <Col>
          <Button variant="primary" style={styles.addButton} onClick={() => handleShowModal()}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter un Véhicule
          </Button>
        </Col>
      </Row>

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
                  {userVehicules.map((vehicle) => (
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
                          onClick={() => dispatch(deleteVehicule(vehicle.id))}
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Modifier le Véhicule' : 'Ajouter un Nouveau Véhicule'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>VIN</Form.Label>
              <Form.Control
                type="text"
                value={vin}
                onChange={handleVinChange}
                placeholder="Entrez le VIN"
              />
              <Button 
                variant="info" 
                onClick={handleSearchByVin}
                style={styles.searchButton}
              >
                Rechercher par VIN
              </Button>
            </Form.Group>
            
            <hr />

            <h5>Recherche par Modèle, Marque et Année</h5>
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
              <Form.Label>Année</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={newVehicle.year}
                onChange={handleChange}
                placeholder="Entrez l'année"
              />
            </Form.Group>

            <Button 
              variant="info" 
              onClick={handleSearchByModel}
              style={styles.searchButton}
            >
              Rechercher par Modèle, Marque et Année
            </Button>

            {error && (
              <p style={{color:'red'}}>Erreur lors de la recherche : {error}</p>
            )}

            {recalls.length > 0 && (
              <div style={styles.recalls}>
                <h5>Rappels du véhicule</h5>
                <ul>
                  {recalls.map((recall, index) => (
                    <li key={index}>
                      <strong>Composant : </strong>{recall.Component}<br />
                      <strong>Résumé : </strong>{recall.Summary}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
          <Button variant="primary" onClick={handleSubmit}>
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
  searchButton: {
    marginTop: '10px',
  },
  recalls: {
    marginTop: '20px',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '8px',
  },
};

export default GestionVehicule;
