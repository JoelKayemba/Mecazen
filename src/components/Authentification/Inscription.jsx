import React, { useState ,useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container , Spinner , Alert} from 'react-bootstrap';
import { useDispatch , useSelector  } from 'react-redux';
import { inscriptionUser } from '../../redux/Actions/InscriptionAction';
import { useNavigate } from 'react-router-dom';

function Inscription() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone:'',
    password: '',
    confirmPassword: '',
  });

  const [confirmPassword, setConfirmPassword]= useState(false);

  const { loading, error, user } = useSelector((state) => state.inscription);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
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
    if (formData.password !== formData.confirmPassword) {
      setConfirmPassword(true);
      return
    }

    const userData={
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    };

    dispatch(inscriptionUser(userData));
  };

  return (
    <Container style={styles.container}>
      <h2 style={styles.title}>Créer un compte</h2>
      <p style={styles.subtitle}>Inscrivez-vous pour commencer à utiliser notre service</p>


     

      {/* Message d'erreur */}
      {error && <Alert variant="danger">{error}</Alert>}


      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingName" label="Nom d'utilisateur" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="Nom d'utilisateur" 
            name="username" 
            value={formData.username} 
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

        <FloatingLabel controlId="floatingPhone" label="Numero de Telephone" className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="+1 873 364 3664" 
            name="phone" 
            value={formData.phone} 
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
          {confirmPassword && (<p style={{color:'red', fontSize:'12px'}}>Le mot de passe ne correspond pas</p>)}
        </FloatingLabel>

        <Button variant="dark" type="submit" style={styles.button}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Inscription'}
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
