import React from 'react';
import { Table } from 'react-bootstrap';

function MesClients() {
  const clients = [
    { nom: 'Jean Dupont', email: 'jean.dupont@example.com', telephone: '0612345678', voiture: 'Toyota Corolla' },
    { nom: 'Marie Curie', email: 'marie.curie@example.com', telephone: '0612345679', voiture: 'Renault Clio' },
    { nom: 'Paul Martin', email: 'paul.martin@example.com', telephone: '0612345680', voiture: 'Peugeot 308' },
  ];

  return (
    <div>
      <h2>Mes Clients</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Voiture</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.nom}</td>
              <td>{client.email}</td>
              <td>{client.telephone}</td>
              <td>{client.voiture}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MesClients;