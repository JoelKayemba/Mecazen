import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function Authentification() {
  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Connectez-vous à votre compte</h2>
      <p style={styles.subtitle}>Veuillez entrer vos informations pour accéder à votre compte</p>

      <FloatingLabel
        controlId="floatingInput"
        label="Adresse email"
        className="mb-3"
      >
        <Form.Control 
          type="email" 
          placeholder="name@example.com" 
          style={styles.input} 
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Mot de passe">
        <Form.Control 
          type="password" 
          placeholder="Mot de passe" 
          style={styles.input} 
          required
        />
      </FloatingLabel>

      <div style={styles.optionsContainer}>
        <Button variant="dark" type="submit" style={styles.button}>
          Se connecter
        </Button>
        <p style={styles.forgotPassword}>
          <a href="/reset-password" style={styles.link}>Mot de passe oublié ?</a>
        </p>
      </div>
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
  input: {
    padding: '10px',
  },
  optionsContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: '15px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Authentification;
