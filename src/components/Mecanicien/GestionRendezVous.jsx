// GestionRendezVous.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Vous pouvez installer ce package : npm install react-calendar
import 'react-calendar/dist/Calendar.css';

function GestionRendezVous() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Liste fictive des rendez-vous (à remplacer par des données réelles)
  const appointments = [
    { id: 1, client: 'Jean Dupont', vehicle: 'Toyota Corolla 2015', time: '10:00 AM', status: 'Confirmé', date: '2024-10-22' },
    { id: 2, client: 'Marie Curie', vehicle: 'Renault Clio 2018', time: '11:30 AM', status: 'En attente', date: '2024-10-22' },
    { id: 3, client: 'Paul Martin', vehicle: 'Peugeot 308 2019', time: '02:00 PM', status: 'Confirmé', date: '2024-10-23' },
  ];

  // Fonction pour filtrer les rendez-vous selon la date sélectionnée
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === selectedDate.toISOString().split('T')[0]
  );

  return (
    <div>
      <h2>Gestion des Rendez-vous</h2>

      {/* Calendrier pour sélectionner une date */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Sélectionnez une date</h3>
        <Calendar 
          onChange={setSelectedDate} 
          value={selectedDate} 
          locale="fr" // Pour définir la langue française
        />
      </div>

      {/* Affichage des rendez-vous pour la date sélectionnée */}
      <h3>Rendez-vous du {selectedDate.toLocaleDateString()}</h3>
      {filteredAppointments.length > 0 ? (
        <ul>
          {filteredAppointments.map((appointment) => (
            <li key={appointment.id}>
              {appointment.time} - {appointment.client} (Véhicule : {appointment.vehicle}) - {appointment.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun rendez-vous pour cette date.</p>
      )}
    </div>
  );
}

export default GestionRendezVous;
