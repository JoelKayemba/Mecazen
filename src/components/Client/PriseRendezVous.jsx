import React, { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector , useDispatch} from 'react-redux';
import { fetchReparations } from '../../redux/Actions/reparationAction';
import { fetchMechanics } from '../../redux/Actions/mechanicAction';
import { addToHistorique } from '../../redux/Actions/historiqueAction';

function PriseRendezVous() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedReparation, setSelectedReparation] = useState('');
  const [selectedMechanic, setSelectedMechanic] = useState('');
  const [description, setDescription] = useState('');

  // Récupération des véhicules et des modes de paiement depuis Redux
  const vehicules = useSelector((state) => state.vehicule.vehicules);
  const paymentMethods = useSelector((state) => state.paiement.paymentMethods);
  const reparations = useSelector((state) => state.reparation.reparations); // Réparations disponibles
  const mechanics = useSelector((state) => state.mechanic.mechanics); // Mécaniciens disponibles
  const mechanicError = useSelector((state) => state.mechanic.error); // Gestion des erreurs
  const dispatch = useDispatch();

   // Charger les réparations quand le composant est monté
   useEffect(() => {
    dispatch(fetchReparations());
    dispatch(fetchMechanics());
  }, [dispatch]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && selectedVehicle && selectedPaymentMethod && selectedReparation && selectedMechanic && description) {
      const reservation = {
        date: selectedDate.toLocaleDateString(),
        vehicle: selectedVehicle,
        reparation: selectedReparation,
        mechanic: selectedMechanic,
        description: description,
        paymentMethod: selectedPaymentMethod,
      };

      // Ajouter la réservation à l'historique
      dispatch(addToHistorique(reservation));
      
      
      alert('Réservation effectuée avec succès');
    
      
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <h2 style={styles.header}>Prendre un Rendez-vous</h2>
          <Form onSubmit={handleSubmit} style={styles.form}>
            <Form.Group controlId="formVehicle">
              <Form.Label>Sélectionnez votre véhicule</Form.Label>
              {vehicules.length > 0 ? (
                <Form.Control
                  as="select"
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                >
                  <option value="">Choisir un véhicule</option>
                  {vehicules.map((vehicule) => (
                    <option key={vehicule.id} value={vehicule.model}>
                      {vehicule.brand} {vehicule.model} ({vehicule.year})
                    </option>
                  ))}
                </Form.Control>
              ) : (
                <p style={{color:'red'}}>Pas de véhicule ajouté. Vueillez ajouter un vehicule dans Gestion de vehicule</p>
              )}
            </Form.Group>

            <Form.Group controlId="formPayment">
            <Form.Label>Sélectionnez un mode de paiement</Form.Label>
            {paymentMethods.length > 0 ? (
              <Form.Control
                as="select"
                value={selectedPaymentMethod}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              >
                <option value="">Choisir un mode de paiement</option>
                {paymentMethods.map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.cardName} - {method.cardNumber} (Expire: {method.expiryDate})
                  </option>
                ))}
              </Form.Control>
            ) : (
              <p style={{color:'red'}}>Pas de mode de paiement ajouté. Veuillez ajouter un mode de paiement dans Paiements</p>
            )}
          </Form.Group>

            {/* Sélection de réparation */}
            <Form.Group controlId="formReparation">
              <Form.Label>Sélectionnez une réparation</Form.Label>
              {reparations.length > 0 ? (
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    const selectedRep = reparations.find(rep => rep.title === e.target.value);
                    setSelectedReparation(selectedRep); // Sélectionne l'objet réparation complet
                  }}
                >
                  <option value="">Choisir une réparation</option>
                  {reparations.map((reparation, index) => (
                    <option key={index} value={reparation.title}>
                      {reparation.title} - {reparation.price} €
                    </option>
                  ))}
                </Form.Control>
              ) : (
                <p>Pas de réparation disponible.</p>
              )}
            </Form.Group>

             {/* Sélection de mécanicien */}
             <Form.Group controlId="formMechanic">
              <Form.Label>Sélectionnez un mécanicien</Form.Label>
              {mechanicError ? (
                <p>Erreur : {mechanicError}</p>
              ) : mechanics.length > 0 ? (
                <Form.Control
                  as="select"
                  value={selectedMechanic}
                  onChange={(e) => setSelectedMechanic(e.target.value)}
                >
                  <option value="">Choisir un mécanicien</option>
                  {mechanics.map((mechanic, index) => (
                    <option key={index} value={mechanic.name}>
                      {mechanic.name} - {mechanic.specialty}
                    </option>
                  ))}
                </Form.Control>
              ) : (
                <p>Chargement des mécaniciens...</p>
              )}
            </Form.Group>

            {/* Champ de description */}
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Décrivez les problèmes ou demandes spécifiques"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Choisir une date pour le rendez-vous</Form.Label><br/>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                placeholderText="Sélectionnez une date"
                className="form-control"
              />
            </Form.Group>

            <Button type="submit" variant="primary" style={styles.submitButton}>
              Prendre Rendez-vous
            </Button>
          </Form>
        </Col>
      </Row>
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
  form: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  submitButton: {
    marginTop: '20px',
    width: '100%',
  },
};

export default PriseRendezVous;
