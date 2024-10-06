import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données du formulaire
    console.log('Message envoyé', formData);
  };

  return (
    <>
      <Header />
      <div className="contact">
        <h1>Contactez-nous</h1>
        <p>Vous avez une question ou une demande spécifique? Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais.</p>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom :</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Votre nom"
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email :</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Votre email"
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Message :</label>
            <textarea 
              name="message"
              rows="2"
              placeholder="Votre message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
