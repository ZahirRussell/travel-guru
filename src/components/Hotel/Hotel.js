import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';
import hotelData from '../../Data/HotelData';




const Hotel = () => {
    const {locationName} = useParams();
    const {hotels,map} = hotelData.find(place => place.locationName === locationName);   
     
    return (         
        <div style={{marginTop:'80px'}} className="d-flex justify-content-center align-items-center">
             <div className="rounded p-2" style={{backgroundColor:'#FCF3F4'}}>
            <Container>
               <Row className="align-items-stretch">
                    <Col md={6}>
                        {
                            hotels.map(hotel => 
                            <Row key={hotel.id} className="bg-light p-2 my-2 rounded">
                                <Col sm={6}>
                                    <img src={hotel.photo} alt={hotel.fullName} className="rounded w-100 h-100"/>
                                </Col>
                                <Col sm={6}>                                    
                                      <Card border="secondary" style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title className="place-header">{hotel.fullName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <FontAwesomeIcon icon={faWifi}/> Wifi &nbsp;
                                            <FontAwesomeIcon icon={faBed}/> Bed&nbsp;
                                            <FontAwesomeIcon icon={faSwimmer}/> Pool&nbsp;
                                            <FontAwesomeIcon icon={faSpa}/> Spa&nbsp;
                                            </Card.Subtitle>
                                        <Card.Text className="text-justify">
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Card.Text>
                                             <span className="p-3"> <FontAwesomeIcon className="text-danger" icon={faStar}/> {hotel.score} (20)</span>
                                             <span className="p-3">${hotel.rate}/night</span>
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>)
                        }
                    </Col>  
                    <Col md={5} className="p-4">
                         <iframe title={locationName} className="rounded" src={map} width="100%" height="540" frameBorder="1" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Col>                
                </Row>
            </Container>
            </div> 
            </div> 
    );
};

export default Hotel;