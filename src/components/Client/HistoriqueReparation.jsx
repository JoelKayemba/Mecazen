import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';

function HistoriqueReparation() {
  // Récupérer l'historique des réservations depuis Redux
  const historique = useSelector((state) => state.historique.historique);

  return (
    <Container style={styles.container}>
      <h2 style={styles.header}>Historique des Réparations</h2>
      
      {/* Vérifier s'il y a des réservations dans l'historique */}
      {historique.length > 0 ? (
        <Table striped bordered hover style={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Véhicule</th>
              <th>Réparation</th>
              <th>Mécanicien</th>
              <th>Description</th>
              <th>Mode de Paiement</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
          {historique.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.date}</td>
              <td>{reservation.vehicle}</td>
              {/* Accéder au titre de la réparation */}
              <td>{reservation.reparation?.title}</td> 
              <td>{reservation.mechanic}</td>
              <td>{reservation.description}</td>
              <td>{reservation.paymentMethod}</td>
              {/* Afficher le prix de la réparation */}
              <td>{reservation.reparation?.price ? `${reservation.reparation.price} €` : 'N/A'}</td>
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
