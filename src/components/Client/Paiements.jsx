import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addPaymentMethod, editPaymentMethod, deletePaymentMethod } from '../../redux/Actions/paiementAction';

function Paiements() {
  const dispatch = useDispatch();
  const paymentMethods = useSelector((state) => state.paiement.paymentMethods);
  const user = useSelector((state) => state.inscription?.user || state.auth?.user); // Récupération de l'utilisateur connecté
  
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState({ cardName: '', cardNumber: '', expiryDate: '', cvc: '' });

  // Affiche uniquement les méthodes de paiement liées à l'utilisateur actuel
  const userPaymentMethods = paymentMethods.filter((method) => method.userId === user?.id);

  const handleShowModal = (method = null) => {
    if (method) {
      setEditMode(true);
      setSelectedPayment(method);
      setPaymentMethod({ cardName: method.cardName, cardNumber: method.cardNumber, expiryDate: method.expiryDate, cvc: method.cvc });
    } else {
      setEditMode(false);
      setPaymentMethod({ cardName: '', cardNumber: '', expiryDate: '', cvc: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentMethod({ cardName: '', cardNumber: '', expiryDate: '', cvc: '' });
    setSelectedPayment(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentMethod({ ...paymentMethod, [name]: value });
  };

  const handleAddPayment = () => {
    const newId = paymentMethods.length + 1;
    dispatch(addPaymentMethod({ id: newId, userId: user.id, type: 'Carte de Crédit', ...paymentMethod }));
    handleCloseModal();
  };

  const handleEditPayment = () => {
    dispatch(editPaymentMethod(selectedPayment.id, paymentMethod));
    handleCloseModal();
  };

  const handleDeletePayment = (id) => {
    dispatch(deletePaymentMethod(id));
  };

  return (
    <Container fluid style={styles.container}>
      <h2 style={styles.header}>Gestion des Moyens de Paiement</h2>
      <Row className="mb-4" style={styles.actionRow}>
        <Col>
          <Button variant="primary" style={styles.addButton} onClick={() => handleShowModal()}>
            <FontAwesomeIcon icon={faPlus} /> Ajouter une Carte de Crédit
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
                    <th>Nom sur la Carte</th>
                    <th>Numéro de Carte</th>
                    <th>Date d'Expiration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userPaymentMethods.map((method) => (
                    <tr key={method.id}>
                      <td>{method.id}</td>
                      <td>{method.cardName}</td>
                      <td>{method.cardNumber}</td>
                      <td>{method.expiryDate}</td>
                      <td>
                        <Button variant="warning" size="sm" style={styles.actionButton} onClick={() => handleShowModal(method)}>
                          <FontAwesomeIcon icon={faEdit} /> Modifier
                        </Button>{' '}
                        <Button variant="danger" size="sm" style={styles.actionButton} onClick={() => handleDeletePayment(method.id)}>
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
          <Modal.Title>{editMode ? 'Modifier' : 'Ajouter'} une Carte Bancaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nom sur la Carte</Form.Label>
              <Form.Control type="text" name="cardName" value={paymentMethod.cardName} onChange={handleChange} placeholder="Nom sur la carte" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numéro de Carte</Form.Label>
              <Form.Control type="text" name="cardNumber" value={paymentMethod.cardNumber} onChange={handleChange} placeholder="Numéro de la carte" maxLength="16" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Date d'Expiration</Form.Label>
                  <Form.Control type="text" name="expiryDate" value={paymentMethod.expiryDate} onChange={handleChange} placeholder="MM/AA" maxLength="5" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control type="text" name="cvc" value={paymentMethod.cvc} onChange={handleChange} placeholder="CVC" maxLength="3" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Annuler</Button>
          <Button variant="primary" onClick={editMode ? handleEditPayment : handleAddPayment}>{editMode ? 'Modifier' : 'Ajouter'}</Button>
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

export default Paiements;
