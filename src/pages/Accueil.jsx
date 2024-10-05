import React from 'react'
import Header from '../components/Common/Header'
import Bienvenue from '../components/Common/Bienvenue';
import SectionHero from '../components/Common/SectionHero';
import ReservationSection from '../components/Common/ReservationSection';
import FeaturesSection from '../components/Common/FeaturesSections';
import UsageSection from '../components/Common/UsageSection';
import Footer from '../components/Common/Footer';
import JoinSection from '../components/Common/JoinSection';

function Accueil() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <Bienvenue/>
      <SectionHero/>
      <ReservationSection/>
      <FeaturesSection/>
      <UsageSection/>
      <JoinSection/>
      <Footer/>
      
    </div>
  )
}

export default Accueil;