// ClientDashboard.js
import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import { faChartLine, faCar, faCalendarCheck, faHistory, faCreditCard, faUser ,faFileAlt} from '@fortawesome/free-solid-svg-icons';
import GestionVehicule from '../Client/GestionVehicule';
import RendezVous from '../Client/PriseRendezVous';
import Historique from '../Client/HistoriqueReparation';
import Paiements from '../Client/Paiements';
import Profil from '../Client/ProfilUtilisateur';
import TableauDeBord from './TableauDeBord';
import Factures from '../Client/Factures';

function ClientDashboard() {
  const [activeComponent, setActiveComponent] = useState('Tableau de bord');

  const clientLinks = [
    { name: 'Tableau de bord', icon: faChartLine, component: 'Tableau de bord' },
    { name: 'Gestion de véhicule', icon: faCar, component: 'Gestion de véhicule' },
    { name: 'Rendez-vous', icon: faCalendarCheck, component: 'Rendez-vous' },
    { name: 'Historique', icon: faHistory, component: 'Historique' },
    { name: 'Factures', icon: faFileAlt, component: 'Factures' },
    { name: 'Paiements', icon: faCreditCard, component: 'Paiements' },
    { name: 'Profil', icon: faUser, component: 'Profil' },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Gestion de véhicule':
        return <GestionVehicule />;
      case 'Rendez-vous':
        return <RendezVous />;
      case 'Historique':
        return <Historique />;
      case 'Paiements':
        return <Paiements />;
      case 'Profil':
        return <Profil />;
      case 'Factures':
        return <Factures />;
      default:
        return <TableauDeBord/>;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar 
        links={clientLinks.map(link => ({
          ...link,
          onClick: () => setActiveComponent(link.component)
        }))}
      />
      <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default ClientDashboard;
