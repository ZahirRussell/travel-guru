import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import hotelData from '../../Data/HotelData';


const Slider = ({deviceType}) => { 
    const locations = hotelData;
    return (
        <div style={{marginTop:'100px'}}>

         <Container>
               <Row className="align-items-stretch">
               <Carousel >
               {locations.map(location => {
                return (
                    <Carousel.Item>
                           <Row key={location.id} className="p-4 my-4 rounded"> 
                           <Col sm={6}>
                                    <img src={location.photo} alt={location.locationName} className="rounded w-100 h-100"/>
                                </Col>                               
                            <Col sm={6}>                                    
                                <span className="carousel-caption-custom">                    
                                    <h1 className="place-header">{location.locationName}</h1>
                                        <p className="place-detail text-justify">{location.description}</p>                                                                               
                                        <Link to={`/book/${location.id}`}>
                                                <Button variant="warning">See Booking <FontAwesomeIcon icon={faArrowRight}/> </Button>
                                       </Link>
                                    </span>                                   
                            </Col>                                
                            </Row>
                            </Carousel.Item>
                            );
                        })}
                    </Carousel >            
                </Row>
            </Container>

         
       
    </div>
    );
};

export default Slider;