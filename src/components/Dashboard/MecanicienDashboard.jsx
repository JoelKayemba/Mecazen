// MecanicienDashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import { faChartLine, faCalendarAlt, faUsers, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import MonPlanning from '../Mecanicien/GestionRendezVous'; 
import MesClients from '../Mecanicien/Clients'
import Documents from '../Mecanicien/Documents'; 
import Statistique from '../Mecanicien/Statistiques';
import TableauDeBordMecanicien from './TableauDeBordMecanicien'; 

function MecanicienDashboard() {
  const [activeComponent, setActiveComponent] = useState('Tableau de bord');

  const mecanicienLinks = [
    { name: 'Tableau de bord', icon: faChartLine, component: 'TableauDeBordMecanicien' },
    { name: 'Mon Planning', icon: faCalendarAlt, component: 'MonPlanning' },
    { name: 'Mes Clients', icon: faUsers, component: 'MesClients' },
    { name: 'Documents', icon: faFileAlt, component: 'Documents' },
    { name: 'Statistique', icon: faHistory, component: 'Statistique' },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Mon tableau de bord':
        return <TableauDeBordMecanicien />;
      case 'MonPlanning':
        return <MonPlanning />;
      case 'MesClients':
        return <MesClients />;
      case 'Documents':
        return <Documents />;
      case 'Statistique':
        return <Statistique />;
      default:
        return <TableauDeBordMecanicien />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar 
        links={mecanicienLinks.map(link => ({
          ...link,
          onClick: () => setActiveComponent(link.component),
          active: activeComponent === link.component // Gestion de l'élément actif
        }))}
      />
      <div style={{ marginLeft: '250px', width: '100%', padding: '20px' }}>
        
        {renderComponent()}
      </div>
    </div>
  );
}

export default MecanicienDashboard;
