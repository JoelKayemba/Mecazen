import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/AuthentificationAction';
import { useNavigate } from 'react-router-dom';  

function Connexion() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { loading, error, user } = useSelector((state) => state.auth);  // État de connexion
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  useEffect(() => {
    if (user) {
      // Si la connexion est réussie, redirection vers le tableau de bord
      navigate('/');  
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      // etant donne l'utilisation de l'API dummyJson il existe des utilisateur deja predefini pour la connexion
      username: 'emilys',  
      password: 'emilyspass',
      
    };
    

    dispatch(loginUser(userData));  
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Connexion</h2>
      <p style={styles.subtitle}>Veuillez entrer vos identifiants pour vous connecter</p>

      {/* Message d'erreur */}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingEmail" label="Nom d'utilisateur" className="mb-3">
          <Form.Control 
            type="text" 
             placeholder="Nom d'utilisateur"
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Mot de passe" className="mb-3">
          <Form.Control 
            type="password" 
            placeholder="Mot de passe" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </FloatingLabel>

        <Button variant="dark" type="submit" style={styles.button}>
          {loading ? 'Chargement...' : 'Se connecter'}
        </Button>
      </Form>

      <p style={styles.signupText}>
        Vous n'avez pas de compte ? <a href="/inscription" style={styles.link}>Inscrivez-vous</a>
      </p>
    </Container>
  );
}


const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  signupText: {
    marginTop: '15px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Connexion;
