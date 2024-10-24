// PerformanceStats.js
import React from 'react';

function PerformanceStats() {
  // Placeholder pour les statistiques (à remplacer par des données réelles venant de l'API)
  const stats = {
    totalAppointments: 20,
    completedRepairs: 15,
    pendingAppointments: 5,
    totalEarnings: 1200, // En euros
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Statistiques de performance</h3>
      <p>Total des rendez-vous : {stats.totalAppointments}</p>
      <p>Réparations terminées : {stats.completedRepairs}</p>
      <p>Rendez-vous en attente : {stats.pendingAppointments}</p>
      <p>Total des gains : {stats.totalEarnings} €</p>
    </div>
  );
}

export default PerformanceStats;
