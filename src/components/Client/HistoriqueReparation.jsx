import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';

function HistoriqueReparation() {
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous);

  const user = useSelector((state) => state.inscription?.user || state.auth?.user);

  const userRendezVous = rendezVous.filter((reservation) => reservation.name === user?.username);

  console.log('User RendezVous:', userRendezVous);

  const showReasonColumn = userRendezVous.some((reservation) => reservation.status === 'Refusé' && reservation.reason);

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
              {showReasonColumn && <th>Raison</th>}
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
                <td>{reservation.status}</td>
                {showReasonColumn && (
                  <td>{reservation.status === 'Refusé' ? reservation.reason : ''}</td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Aucune réservation trouvée dans l'historique.</p>
      )}
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
