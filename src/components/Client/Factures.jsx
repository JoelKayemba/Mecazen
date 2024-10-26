import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

function Factures() {
  const factures = useSelector((state) => state.facture.factures);
  const user = useSelector((state) => state.inscription?.user || state.auth?.user);

  const userFactures = factures.filter(facture => facture.name === user?.username);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text('Facture MecaZen', 10, 10);
    doc.text(`Date : ${new Date().toLocaleDateString()}`, 10, 20);
    doc.text(`Client : ${user ? user.username : 'Nom non disponible'}`, 10, 30);
    doc.text(`Numéro de téléphone : ${user ? user.phone : 'Numéro non disponible'}`, 10, 40);

    let yOffset = 50;
    doc.text('Détails de la réparation', 10, yOffset);

    userFactures.forEach((facture, index) => {
      const vehicle = facture.vehicle
        ? `${facture.vehicle.brand || 'Marque inconnue'} ${facture.vehicle.model || 'Modèle inconnu'} (${facture.vehicle.year || 'Année inconnue'})`
        : 'Aucune info véhicule';

      yOffset += 10;
      doc.text(
        `Date: ${facture.date} | Véhicule: ${vehicle} | Réparation: ${facture.reparation?.title || 'N/A'} | Mécanicien: ${facture.mechanic} | Durée: ${facture.duration || 'N/A'} | Prix: ${facture.price ? `${facture.price} €` : 'N/A'}`,
        10,
        yOffset
      );
    });

    const total = userFactures.reduce((total, facture) => total + (parseFloat(facture.price) || 0), 0).toFixed(2);
    yOffset += 20;
    doc.text(`Total : ${total} $`, 10, yOffset);

    doc.save('facture.pdf');
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.header}>Votre Facture</h2>

      {userFactures.length > 0 ? (
        <>
          <div style={styles.facture}>
            <h3>Facture Professionnelle</h3>
            <p>Date : {new Date().toLocaleDateString()}</p>
            <h5>Client</h5>
            <p>Nom du client : {user ? user.username : 'Nom non disponible'}</p>
            <p>Numéro de téléphone : {user ? user.phone : 'Numéro de téléphone non disponible'}</p>

            <h5>Détails de la réparation</h5>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Véhicule</th>
                  <th>Réparation</th>
                  <th>Mécanicien</th>
                  <th>Durée</th>
                  <th>Description</th>
                  <th>Mode de Paiement</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {userFactures.map((facture, index) => (
                  <tr key={index}>
                    <td>{facture.date}</td>
                    <td>{facture.vehicle ? `${facture.vehicle.brand || 'Marque inconnue'} ${facture.vehicle.model || 'Modèle inconnu'} (${facture.vehicle.year || 'Année inconnue'})` : 'Aucune info'}</td>
                    <td>{facture.reparation?.title || 'N/A'}</td>
                    <td>{facture.mechanic}</td>
                    <td>{facture.duration || 'N/A'}</td>
                    <td>{facture.description}</td>
                    <td>{facture.paymentMethod}</td>
                    <td>{facture.price ? `${facture.price} $` : '0'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h5>Total</h5>
            <p>
              {userFactures.reduce((total, facture) => total + (parseFloat(facture.price) || 0), 0).toFixed(2)} $
            </p>
          </div>

          <Button onClick={handleDownloadPDF} variant="primary" style={styles.button}>
            Télécharger la Facture en PDF
          </Button>
        </>
      ) : (
        <p>Aucune facture trouvée pour générer une facture.</p>
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
  facture: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
  },
  button: {
    marginTop: '20px',
  },
};

export default Factures;
