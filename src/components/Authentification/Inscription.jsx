import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis', formData);
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Créer un compte</h2>
      <p style={styles.subtitle}>Inscrivez-vous pour commencer à utiliser notre service</p>

      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Nom complet" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="John Doe" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingEmail" label="Adresse email" className="mb-3">
          <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            name="email" 
            value={formData.email} 
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

        <FloatingLabel controlId="floatingConfirmPassword" label="Confirmer le mot de passe" className="mb-3">
          <Form.Control 
            type="password" 
            placeholder="Confirmez le mot de passe" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </FloatingLabel>

        <Button variant="dark" type="submit" style={styles.button}>
          S'inscrire
        </Button>
      </Form>

      <p style={styles.loginText}>
        Vous avez déjà un compte ? <a href="/login" style={styles.link}>Connectez-vous</a>
      </p>
    </Container>
  );
}

//
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
  loginText: {
    marginTop: '15px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Inscription;
