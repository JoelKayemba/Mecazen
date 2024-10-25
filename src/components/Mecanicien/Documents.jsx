import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

function Documents() {
  const documents = [
    { nom: 'Facture 001', date: '22/10/2024', montant: '150€', status: 'Payé', description: 'Facture pour réparation de la Toyota Corolla', fichier: 'facture001.pdf', client: 'Jean Dupont' },
    { nom: 'Facture 002', date: '23/10/2024', montant: '200€', status: 'En attente', description: 'Facture pour réparation de la Renault Clio', fichier: 'facture002.pdf', client: 'Marie Curie' },
    { nom: 'Rapport de Réparation', date: '24/10/2024', montant: 'N/A', status: 'Complété', description: 'Rapport complet de la réparation effectuée', fichier: 'rapport_reparation.pdf', client: 'Paul Martin' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Afficher la modale des détails du document
  const handleShowDetails = (doc) => {
    setSelectedDocument(doc);
    setShowModal(true);
  };

  // Fermer la modale
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDocument(null);
  };

  // Styles en ligne
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
            <th>Nom du Document</th>
            <th>Date</th>
            <th>Client</th>
            <th>Montant</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.nom}</td>
              <td>{doc.date}</td>
              <td>{doc.client}</td>
              <td>{doc.montant}</td>
              <td>{doc.status}</td>
              <td>
                <Button variant="info" style={styles.buttonDetails} onClick={() => handleShowDetails(doc)}>Détails</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modale pour afficher les détails du document */}
      {selectedDocument && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={styles.modalTitle}>Détails du Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nom :</strong> {selectedDocument.nom}</p>
            <p><strong>Date :</strong> {selectedDocument.date}</p>
            <p><strong>Client :</strong> {selectedDocument.client}</p>
            <p><strong>Montant :</strong> {selectedDocument.montant}</p>
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
