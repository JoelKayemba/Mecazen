// MechanicDashboard.js
import React from 'react';
import Sidebar from '../Common/Sidebar';
import { faChartLine, faCalendarAlt, faUsers, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

function MechanicDashboard() {
  const mechanicLinks = [
    { name: 'Tableau de bord', path: '/mecanicien/dashboard', icon: faChartLine },
    { name: 'Mon Planning', path: '/mecanicien/planning', icon: faCalendarAlt },
    { name: 'Mes Clients', path: '/mecanicien/clients', icon: faUsers },
    { name: 'Documents', path: '/mecanicien/documents', icon: faFileAlt },
    { name: 'Historique', path: '/mecanicien/historique', icon: faHistory },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar links={mechanicLinks} />
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        <h1>Bienvenue sur le Tableau de Bord du Mécanicien</h1>
        
      </div>
    </div>
  );
}

export default MechanicDashboard;
