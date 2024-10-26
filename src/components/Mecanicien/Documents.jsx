import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Documents() {
  // Utiliser Redux pour récupérer les factures et l'utilisateur actuellement connecté
  const documents = useSelector((state) => state.facture.factures);
  const user = useSelector((state) => state.auth.user); // Assurez-vous que l'utilisateur actuel est bien dans le state auth
  

  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Filtrer les factures pour celles qui appartiennent au mécanicien actuel
  const fullName = `${user.firstName} ${user.lastName}`;
  const filteredDocuments = documents.filter((doc) => doc.mechanic === fullName);

  const handleShowDetails = (doc) => {
    setSelectedDocument(doc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDocument(null);
  };

  const styles = {
    container: {
      padding: '20px',
      margin: '60px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#333',
    },
    table: {
      marginBottom: '20px',
    },
    modalTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#333',
    },
    buttonDetails: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Documents</h2>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Montant</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc, index) => (
            <tr key={index}>
              <td>{doc.factureDate}</td>
              <td>{doc.name}</td>
              <td>{doc.price} $</td>
              <td>{doc.status}</td>
              <td>
                <Button variant="info" style={styles.buttonDetails} onClick={() => handleShowDetails(doc)}>Détails</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedDocument && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Détails du Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nom du mecanicien:</strong> {user.lastName} {user.firstName}</p>
            <p><strong>Date :</strong> {selectedDocument.factureDate}</p>
            <p><strong>Client :</strong> {selectedDocument.name}</p>
            <p><strong>Montant :</strong> {selectedDocument.price} $</p>
            <p><strong>Status :</strong> {selectedDocument.status}</p>
            <p><strong>Description :</strong> {selectedDocument.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
            <Button variant="primary" href={`/documents/${selectedDocument.fichier}`} download>
              Télécharger
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Documents;
