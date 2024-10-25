
import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

function ProchainsRendezVous() {
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous);

  return (
    <div>
      <h2>Prochains Rendez-vous</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Véhicule</th>
            <th>Réparation</th>
            <th>Mécanicien</th>
            <th>Mode de Paiement</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rendezVous.map((rendezVous, index) => (
            <tr key={index}>
              <td>{rendezVous.client}</td>
              <td>{rendezVous.date}</td>
              <td>{rendezVous.vehicle}</td>
              <td>{rendezVous.reparation.title}</td>
              <td>{rendezVous.mechanic}</td>
              <td>{rendezVous.paymentMethod}</td>
              <td>{rendezVous.description}</td>
              <td>
                <Button variant="success">Confirmer</Button>{' '}
                <Button variant="danger">Refuser</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProchainsRendezVous;
