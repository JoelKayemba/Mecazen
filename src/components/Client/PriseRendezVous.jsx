import React, { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector , useDispatch} from 'react-redux';
import { fetchReparations } from '../../redux/Actions/reparationAction';

function PriseRendezVous() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedReparation, setSelectedReparation] = useState('');

  // Récupération des véhicules et des modes de paiement depuis Redux
  const vehicules = useSelector((state) => state.vehicule.vehicules);
  const paymentMethods = useSelector((state) => state.paiement.paymentMethods);
  const reparations = useSelector((state) => state.reparation.reparations); // Réparations disponibles
  const dispatch = useDispatch();

   // Charger les réparations quand le composant est monté
   useEffect(() => {
    dispatch(fetchReparations());
  }, [dispatch]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedVehicle && selectedPaymentMethod) {
      // Gestion de la soumission du rendez-vous ici
      alert(`Rendez-vous pris pour le : ${selectedDate.toLocaleDateString()} avec le véhicule ${selectedVehicle} et le mode de paiement ${selectedPaymentMethod}`);
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
                  value={selectedReparation}
                  onChange={(e) => setSelectedReparation(e.target.value)}
                >
                  <option value="">Choisir une réparation</option>
                  {reparations.map((reparation, index) => (
                    <option key={index} value={reparation.title}>
                      {reparation.title} - {reparation.price} €
                    </option>
                  ))}
                </Form.Control>
              ) : (
                <p style={{color:'red'}}>Pas de réparation disponible.</p>
              )}
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
