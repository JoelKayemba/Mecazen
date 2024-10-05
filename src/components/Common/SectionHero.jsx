import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../../App.css';

const SectionHero = () => {
  return (
    <section className="hero-section">
      <Container className="text-center">
        <div className="text-container">
          <h1>Votre mécanicien de confiance pour toutes réparations</h1>
          <p>
            Bienvenue chez MecaZen, où votre satisfaction est notre priorité.
            Découvrez des services de qualité pour tous vos besoins automobiles.
          </p>
          <div className="button-container">
            <Button variant="dark">Réservez</Button>
            <Button variant="outline-dark">En savoir plus</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHero;
