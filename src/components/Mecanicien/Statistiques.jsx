import React from 'react';
import { useSelector } from 'react-redux';

function Statistiques() {
  const rendezVous = useSelector((state) => state.rendezVous.rendezVous); // Récupère les rendez-vous depuis Redux
  const user = useSelector((state) => state.auth.user); // Récupère le mécanicien actuellement connecté

  // Filtrer les rendez-vous pour n'afficher que ceux liés au mécanicien
  const fullName = `${user.firstName} ${user.lastName}`;
  const filteredRendezVous = rendezVous.filter(rdv => rdv.mechanic === fullName);

  // Calculer les bénéfices pour chaque réparation (15% du prix)
  const rendezVousAvecBenefices = filteredRendezVous.map(rdv => ({
    ...rdv,
    benefice: (rdv.price * 0.15).toFixed(2), // Bénéfices à 15% arrondis à deux décimales
  }));

  // Calculer le bénéfice total
  const totalBenefices = rendezVousAvecBenefices.reduce((total, rdv) => total + parseFloat(rdv.benefice), 0).toFixed(2);

  const styles = {
    container: {
      padding: '20px',
      marginTop: '20px',
    },
    table: {
      width: '100%',
      marginBottom: '20px',
      borderCollapse: 'collapse',
    },
    th: {
      borderBottom: '2px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      borderBottom: '1px solid #ddd',
      padding: '10px',
    },
    total: {
      fontWeight: 'bold',
      textAlign: 'right',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Statistiques de Réparations</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Client</th>
            <th style={styles.th}>Véhicule</th>
            <th style={styles.th}>Durée</th>
            <th style={styles.th}>Prix ($)</th>
            <th style={styles.th}>Bénéfice ($)</th>
          </tr>
        </thead>
        <tbody>
          {rendezVousAvecBenefices.map((rdv, index) => (
            <tr key={index}>
              <td style={styles.td}>{rdv.date}</td>
              <td style={styles.td}>{rdv.name}</td>
              <td style={styles.td}>
                {rdv.vehicle ? `${rdv.vehicle.brand} ${rdv.vehicle.model} (${rdv.vehicle.year})` : 'Aucune info'}
              </td>
              <td style={styles.td}>{rdv.duration || 'Non spécifiée'}</td>
              <td style={styles.td}>{rdv.price ? `${rdv.price} $` : '0'}</td>
              <td style={styles.td}>{rdv.benefice} $</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 style={styles.total}>Bénéfice Total : {totalBenefices} $</h4>
    </div>
  );
}

export default Statistiques;
