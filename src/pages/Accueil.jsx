import React from 'react'
import Header from '../components/Common/Header'
import Bienvenue from '../components/Common/Bienvenue';
import SectionHero from '../components/Common/SectionHero';
import ReservationSection from '../components/Common/ReservationSection';

function Accueil() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <SectionHero/>
      <Bienvenue/>
      <ReservationSection/>
      
    </div>
  )
}

export default Accueil;