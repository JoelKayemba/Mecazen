import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

function Factures() {
  const historique = useSelector((state) => state.historique.historique); // Récupération de l'historique
  const user = useSelector((state) => {
    if (state.inscription && state.inscription.user) {
      return state.inscription.user;
    }
    if (state.auth && state.auth.user) {
      return state.auth.user;
    }
    return null;
  });

  // Fonction pour télécharger la facture en PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text('Facture Professionnelle', 10, 10);
    doc.text(`Date : ${new Date().toLocaleDateString()}`, 10, 20);
    doc.text(`Client : ${user ? user.username : 'Nom non disponible'}`, 10, 30);
    doc.text('Adresse : 123 Rue Exemple, Ville', 10, 40);
    
    let yOffset = 50; // Déplacement vertical initial pour les détails des réparations
    doc.text('Détails de la réparation', 10, yOffset);
    
    // Génération du tableau des réparations
    historique.forEach((reservation, index) => {
      yOffset += 10;
      doc.text(
        `Date: ${reservation.date} | Véhicule: ${reservation.vehicle} | Réparation: ${reservation.reparation?.title} | Mécanicien: ${reservation.mechanic} | Prix: ${reservation.reparation?.price ? `${reservation.reparation.price} €` : 'N/A'}`,
        10,
        yOffset
      );
    });

    // Calcul et affichage du total
    const total = historique.reduce((total, reservation) => total + (parseInt(reservation.reparation?.price) || 0), 0);
    yOffset += 20;
    doc.text(`Total : ${total} €`, 10, yOffset);

    // Téléchargement du fichier PDF
    doc.save('facture.pdf');
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.header}>Votre Facture</h2>

      {historique.length > 0 ? (
        <>
          <div style={styles.facture}>
            <h3>Facture Professionnelle</h3>
            <p>Date : {new Date().toLocaleDateString()}</p>
            <h5>Client</h5>
            <p>Nom du client : {user ? user.username : 'Nom non disponible'}</p>
            

            <h5>Détails de la réparation</h5>
            <table style={styles.table}>
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
                    <td>{reservation.reparation?.title}</td>
                    <td>{reservation.mechanic}</td>
                    <td>{reservation.description}</td>
                    <td>{reservation.paymentMethod}</td>
                    <td>{reservation.reparation?.price ? `${reservation.reparation.price} €` : 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h5>Total</h5>
            <p>
              {historique.reduce((total, reservation) => total + (parseInt(reservation.reparation?.price) || 0), 0)} €
            </p>
          </div>

          {/* Bouton pour télécharger la facture */}
          <Button onClick={handleDownloadPDF} variant="primary" style={styles.button}>
            Télécharger la Facture en PDF
          </Button>
        </>
      ) : (
        <p>Aucune réservation trouvée pour générer une facture.</p>
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
