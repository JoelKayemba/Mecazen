import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import ClientDashboard from './components/Dashboard/ClientDashboard';
import MecanicienDashboard from './components/Dashboard/MecanicienDashboard';
import TableauDeBord from './components/Dashboard/TableauDeBord';
import Authentification from './components/Authentification/Authentification';
import Inscription from './components/Authentification/Inscription';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Authentification />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/tableau_de_Bord" element={<TableauDeBord />} />

          {/* Routes protégées par authentification */}
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/mechanic-dashboard" element={<MecanicienDashboard />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
