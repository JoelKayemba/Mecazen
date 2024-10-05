import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/welcome.jpg'; 
import image2 from  '../../assets/welcome2.jpg'; 
import image3 from  '../../assets/welcome3.jpg'; 
import '../../App.css';

function Bienvenue() {
  return (
    <div style={{marginTop:'-25px'}}>
    <Carousel fade interval={3000} className="carousel-container m-0" >
      {/* Slide 1 */}
      <Carousel.Item>
        <div
          className="d-block w-100 carousel-slide"
          style={{
            backgroundImage: `url(${image1})`,
            height: '650px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Carousel.Caption>
            <h3>Reservation en un clic</h3>
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
            height: '650px',
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
            height: '650px',
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
    </div>
  );
}

export default Bienvenue;
