import React from 'react';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header'

const Apropos = () => {
  return (
    <>
      <Header />
      <div className="apropos">
        <h1>À propos de MECAZEN</h1>
        <p>
          MECAZEN est une plateforme de gestion des services automobiles conçue pour simplifier la relation entre
          les clients et les mécaniciens. Nous offrons un service de qualité, transparent et efficace, pour tous vos besoins en entretien et réparation de véhicules.
        </p>
        <h2>Notre mission</h2>
        <p>
          Offrir un service de maintenance automobile accessible, fiable, et rapide en connectant les clients avec des professionnels qualifiés.
        </p>
        <h2>Notre équipe</h2>
        <p>
          Notre équipe est composée de mécaniciens qualifiés et de spécialistes en gestion automobile avec des années d'expérience dans l'industrie.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Apropos;
