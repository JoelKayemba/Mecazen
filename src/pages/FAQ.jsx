import React from 'react';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import '../App.css'

const FAQ = () => {
  return (
    <>
      <Header />
      <div className="faq-container">
        <h1 className="faq-title">Foire Aux Questions (FAQ)</h1>
        
        <div className="faq-item">
          <h2 className="faq-question">1. Comment puis-je m'inscrire sur MECAZEN ?</h2>
          <p className="faq-answer">Pour vous inscrire, cliquez sur le bouton "Inscription" en haut à droite de la page d'accueil, remplissez vos informations, et suivez les instructions.</p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">2. Quels types de services sont offerts ?</h2>
          <p className="faq-answer">MECAZEN propose des services de maintenance préventive, réparation de véhicules, diagnostic, et bien plus.</p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">3. Comment puis-je contacter un mécanicien ?</h2>
          <p className="faq-answer">Une fois connecté, vous pouvez contacter un mécanicien via le tableau de bord client ou en utilisant notre page de contact.</p>
        </div>

        <div className="faq-item">
          <h2 className="faq-question">4. Comment puis-je suivre l'état de mes réparations ?</h2>
          <p className="faq-answer">Connectez-vous à votre compte client et accédez à votre tableau de bord pour suivre l'avancement de vos réparations en temps réel.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
