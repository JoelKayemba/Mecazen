import React from 'react';



function NotFoundPage() {


  

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Introuvable</h2>
      <p style={styles.message}>
        Oups! La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#dc3545',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    maxWidth: '600px',
    lineHeight: '1.5',
  },
  
};

export default NotFoundPage;
