import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const SectionHero = () => {

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

    const handleSavoirPlus=()=>{
      navigate('/services')
    };
   

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
            <Button variant="dark" onClick={handleReserver}>Réservez</Button>
            <Button variant="outline-dark" onClick={handleSavoirPlus}>En savoir plus</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHero;
