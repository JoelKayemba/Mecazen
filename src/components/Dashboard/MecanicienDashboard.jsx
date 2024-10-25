// MecanicienDashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import { faChartLine, faCalendarAlt, faUsers, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import MonPlanning from '../Mecanicien/GestionRendezVous'; // Composant pour afficher le planning des rendez-vous
import MesClients from '../Mecanicien/Clients'; // Composant pour afficher la liste des clients
import Documents from '../Mecanicien/Documents'; // Composant pour la gestion des documents
import Historique from '../Mecanicien/Statistiques'; // Composant pour afficher l'historique
import TableauDeBordMecanicien from './TableauDeBordMecanicien'; // Composant pour le tableau de bord principal

function MecanicienDashboard() {
  const [activeComponent, setActiveComponent] = useState('Tableau de bord');

  const mecanicienLinks = [
    { name: 'Tableau de bord', icon: faChartLine, component: 'TableauDeBordMecanicien' },
    { name: 'Mon Planning', icon: faCalendarAlt, component: 'MonPlanning' },
    { name: 'Mes Clients', icon: faUsers, component: 'MesClients' },
    { name: 'Documents', icon: faFileAlt, component: 'Documents' },
    { name: 'Historique', icon: faHistory, component: 'Historique' },
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
      case 'Historique':
        return <Historique />;
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
        <h1>{activeComponent}</h1> {/* Affiche le titre de la section active */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default MecanicienDashboard;
