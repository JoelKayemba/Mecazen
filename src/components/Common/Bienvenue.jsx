import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/welcome.jpg'; 
import image2 from  '../../assets/welcome2.jpg'; 
import image3 from  '../../assets/welcome3.jpg'; 
import '../../App.css';

function Bienvenue() {
  return (
    <Carousel fade interval={3000} className="carousel-container m-0" style={{ position: 'absolute', top: 0, width: '100%' }}>
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          className="d-block w-100 carousel-slide"
          style={{
            backgroundImage: `url(${image1})`,
            height: '750px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Carousel.Caption>
            <h3>Bienvenue chez MecaZen</h3>
            <p>Réservez facilement vos rendez-vous de réparation automobile en ligne.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div
          className="d-block w-100 carousel-slide"
          style={{
            backgroundImage: `url(${image2})`,
            height: '750px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Carousel.Caption>
            <h3>Service professionnel</h3>
            <p>Nos mécaniciens sont des experts qualifiés et certifiés.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div
          className="d-block w-100 carousel-slide"
          style={{
            backgroundImage: `url(${image3})`,
            height: '750px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Carousel.Caption>
            <h3>Des solutions adaptées à vos besoins</h3>
            <p>Des services sur mesure pour l'entretien et la réparation de votre véhicule.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Bienvenue;
