import React from 'react';
import { Table } from 'react-bootstrap';

function Documents() {
  const documents = [
    { nom: 'Facture 001', date: '22/10/2024', montant: '150€', status: 'Payé' },
    { nom: 'Facture 002', date: '23/10/2024', montant: '200€', status: 'En attente' },
    { nom: 'Rapport de Réparation', date: '24/10/2024', montant: 'N/A', status: 'Complété' },
  ];

  return (
    <div>
      <h2>Documents</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom du Document</th>
            <th>Date</th>
            <th>Montant</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td>{doc.nom}</td>
              <td>{doc.date}</td>
              <td>{doc.montant}</td>
              <td>{doc.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Documents;