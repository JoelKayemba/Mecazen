
import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { inscriptionUser } from '../../redux/Actions/InscriptionAction';

function ProfilUtilisateur() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    // Vérifiez d'abord si l'utilisateur est dans inscription
    if (state.inscription.user) {
        return state.inscription.user;
    }
    // Sinon, récupérez-le dans auth
    return state.auth.user;
});


  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '', 
  });

  const [showModal, setShowModal] = useState(false);
  const [modalField, setModalField] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  useEffect(() => {
    // Met à jour l'état uniquement si user existe
    if (user) {
      setUserInfo({
        name: user.username,
        email: user.email,
        password: '',
      });
    }
  }, [user]);

  const handleShowModal = (field) => {
    setModalField(field);
    setUpdatedValue(userInfo[field] || ''); 
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedUserInfo = {
      ...userInfo,
      [modalField]: updatedValue,
    };

    const saveInfo={
      username: updatedUserInfo.name,
      email: updatedUserInfo.email,
      password: updatedUserInfo.password
      
    }
    setUserInfo(updatedUserInfo);
    dispatch(inscriptionUser(saveInfo)); 
    setShowModal(false)
  };

  const handleChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  return (
    <Container fluid style={styles.container}>
      <h2 style={styles.header}>Mon Profil</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card style={styles.card}>
            <Card.Body>
              <Row style={styles.row}>
                <Col md={3}><strong>Nom :</strong></Col>
                <Col>{userInfo.name}</Col>
                <Col md={3}>
                  <Button variant="warning" onClick={() => handleShowModal('name')}>
                    <FontAwesomeIcon icon={faEdit} /> Modifier
                  </Button>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col md={3}><strong>Email :</strong></Col>
                <Col>{userInfo.email}</Col>
                <Col md={3}>
                  <Button variant="warning" onClick={() => handleShowModal('email')}>
                    <FontAwesomeIcon icon={faEdit} /> Modifier
                  </Button>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col md={3}><strong>Mot de passe :</strong></Col>
                <Col>••••••••</Col>
                <Col md={3}>
                  <Button variant="warning" onClick={() => handleShowModal('password')}>
                    <FontAwesomeIcon icon={faEdit} /> Modifier
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal pour modifier les informations */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier {modalField === 'name' ? 'le nom' : modalField === 'email' ? 'l\'email' : 'le mot de passe'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{modalField === 'password' ? 'Nouveau mot de passe' : 'Entrez la nouvelle valeur'}</Form.Label>
              <Form.Control
                type={modalField === 'password' ? 'password' : 'text'}
                value={updatedValue}
                onChange={handleChange}
                placeholder={`Entrez ${modalField === 'password' ? 'le nouveau mot de passe' : 'la nouvelle valeur'}`}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#34495e'
  },
  card: {
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff'
  },
  row: {
    marginBottom: '15px',
    alignItems: 'center'
  }
};

export default ProfilUtilisateur;
