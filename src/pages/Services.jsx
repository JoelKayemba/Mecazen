import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card , Button} from 'react-bootstrap';


import image1 from '../assets/services/diagnostic.jpeg';
import image2 from '../assets/services/changement-huile.jpeg';
import image3 from '../assets/services/pneus.jpeg';
import image4 from '../assets/services/freins.jpg';
import image5 from '../assets/services/suspension.jpeg';
import image6 from '../assets/services/batterie.jpeg';
import image7 from '../assets/services/echappement.jpeg';
import image8 from '../assets/services/climatisation.jpeg';
import image9 from '../assets/services/courroie.jpg';
import image10 from '../assets/services/moteur.jpeg';
import image11 from '../assets/services/transmission.jpeg';
import image12 from '../assets/services/revision.jpeg';
import image13 from '../assets/services/embrayage.jpeg';
import image14 from '../assets/services/eclairage.jpeg';
import image15 from '../assets/services/filtre.jpeg';
import image16 from '../assets/services/revision-securite.jpg';
import image17 from '../assets/services/silencieux.jpeg';
import image18 from '../assets/services/par-brise.jpeg';
import image19 from '../assets/services/electronique.jpeg';
import image20 from '../assets/services/remorquage.jpeg';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';


const servicesList = [
  { image: image1, title: 'Diagnostic de véhicule', description: 'Vérifiez l’état de votre véhicule avec un diagnostic complet.' },
  { image: image2, title: 'Changement d’huile', description: 'Service de vidange d’huile pour une performance optimale de votre moteur.' },
  { image: image3, title: 'Service de pneus', description: 'Installation, équilibrage et rotation des pneus.' },
  { image: image4, title: 'Réparation des freins', description: 'Inspection et remplacement des plaquettes et disques de frein.' },
  { image: image5, title: 'Réparation de suspension', description: 'Réparez vos amortisseurs et suspensions pour une conduite confortable.' },
  { image: image6, title: 'Remplacement de batterie', description: 'Changement de batterie et tests de charge pour garantir une longue durée de vie.' },
  { image: image7, title: 'Système d’échappement', description: 'Inspection et réparation des systèmes d’échappement.' },
  { image: image8, title: 'Climatisation et chauffage', description: 'Réparation et rechargement de la climatisation pour une température idéale.' },
  { image: image9, title: 'Remplacement de courroies', description: 'Changement de la courroie de distribution et accessoires.' },
  { image: image10, title: 'Réparation du moteur', description: 'Diagnostic et réparation de problèmes de moteur.' },
  { image: image11, title: 'Réparation de transmission', description: 'Réparation et remplacement de transmission pour un fonctionnement optimal.' },
  { image: image12, title: 'Révision complète', description: 'Vérifiez tous les systèmes de votre véhicule pour assurer un bon entretien.' },
  { image: image13, title: 'Réparation d’embrayage', description: 'Diagnostic et réparation de l’embrayage de votre véhicule.' },
  { image: image14, title: 'Réparation des éclairages', description: 'Remplacement des phares, feux de signalisation et ampoules défectueuses.' },
  { image: image15, title: 'Changement de filtres', description: 'Remplacement des filtres à huile, air et carburant.' },
  { image: image16, title: 'Révision de sécurité', description: 'Inspection de sécurité pour garantir que votre véhicule respecte les normes.' },
  { image: image17, title: 'Remplacement de silencieux', description: 'Installation de nouveaux silencieux pour un véhicule plus silencieux.' },
  { image: image18, title: 'Réparation de pare-brise', description: 'Réparation ou remplacement de pare-brise fissuré ou endommagé.' },
  { image: image19, title: 'Réparation électronique', description: 'Diagnostic et réparation des systèmes électroniques de votre véhicule.' },
  { image: image20, title: 'Service de remorquage', description: 'Service de remorquage en cas de panne ou d’accident.' },
];

function Services() {

  const {  isAuth } = useSelector((state) => state.auth);
  const { isUser } = useSelector((state) => state.inscription);
  const navigate = useNavigate();



    const handleReserver = () => {
      if(isAuth || isUser){
        navigate('/client-dashboard')
      }
      else{
        navigate('/login')
      }
    } ;

   
  return (
    <>
      
      <Header />

      
      <div className="bg-white text-center py-5">
        <Container>
          <h1 className="display-4">Nos Services Mécaniques</h1>
          <p className="lead">Découvrez nos services professionnels pour tous vos besoins automobiles.</p>
        </Container>
      </div>

      
      <Container className="my-5">
        <h2 className="text-center mb-4">Présentation de Nos Services</h2>
        <p className="text-center">Présentation de nos principaux services: Réparation, Révision et Entretien général.</p>
        <Row>
          {servicesList.map((service, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      
      <Container className="my-5">
        <h2 className="text-center mb-4">Fonctionnalités de Nos Services</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Réparation</Card.Title>
                <Card.Text>Nous offrons des réparations complètes pour tous types de véhicules.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Révision</Card.Title>
                <Card.Text>Assurez-vous que votre véhicule est toujours en parfait état avec notre service de révision.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Entretien général</Card.Title>
                <Card.Text>Gardez votre voiture en bonne santé avec nos services d’entretien régulier.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
      <Container fluid className="bg-dark text-white text-center py-5">
        <h2 className="display-5">Prêt à prendre rendez-vous?</h2>
        <p className="lead">Encourage les visiteurs à prendre rendez-vous pour l'un de nos services.</p>
        <Button variant="light" size="lg" onClick={handleReserver}>Réserver un service maintenant</Button>
      </Container>

      
      <Footer />
    </>
  );
}

export default Services;