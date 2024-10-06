import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import '../App.css';

const FAQ = () => {
  return (
    <>
      <Header />
      
      <Container className="my-5">
        <h1 className="text-center mb-4">Foire Aux Questions (FAQ)</h1>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Comment puis-je m'inscrire sur MECAZEN ?</Accordion.Header>
            <Accordion.Body>
              Pour vous inscrire, cliquez sur le bouton "Inscription" en haut à droite de la page d'accueil, remplissez vos informations, et suivez les instructions.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Quels types de services sont offerts ?</Accordion.Header>
            <Accordion.Body>
              MECAZEN propose des services de maintenance préventive, réparation de véhicules, diagnostic, et bien plus.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Comment puis-je contacter un mécanicien ?</Accordion.Header>
            <Accordion.Body>
              Une fois connecté, vous pouvez contacter un mécanicien via le tableau de bord client ou en utilisant notre page de contact.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Comment puis-je suivre l'état de mes réparations ?</Accordion.Header>
            <Accordion.Body>
              Connectez-vous à votre compte client et accédez à votre tableau de bord pour suivre l'avancement de vos réparations en temps réel.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Quels sont les modes de paiement acceptés sur MECAZEN ?</Accordion.Header>
            <Accordion.Body>
              MECAZEN accepte les cartes de crédit, les virements bancaires et d'autres moyens de paiement en ligne sécurisés.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>6. Puis-je annuler ou modifier mon rendez-vous ?</Accordion.Header>
            <Accordion.Body>
              Oui, vous pouvez annuler ou modifier votre rendez-vous directement depuis votre tableau de bord, tant que le mécanicien n'a pas encore confirmé l'intervention.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>7. Comment garantir la qualité des services sur MECAZEN ?</Accordion.Header>
            <Accordion.Body>
              Tous les mécaniciens sur MECAZEN sont qualifiés et vérifiés. Nous utilisons également un système de notation et d'avis pour garantir que seuls les meilleurs services sont offerts.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Footer />
    </>
  );
}

export default FAQ;
