import React from 'react'
import Header from '../components/Common/Header'
import Bienvenue from '../components/Common/Bienvenue';

function Accueil() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header/>
      <Bienvenue/>
    </div>
  )
}

export default Accueil;