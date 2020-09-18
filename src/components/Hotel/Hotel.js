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
                                    {/* <h5>{hotel.fullName}</h5>
                                    <div className="d-flex justify-content-between">
                                        <h6>Per Night: ${hotel.rate}</h6>
                                    </div>
                                    <ul className="list-unstyled mt-4">
                                        <li> <FontAwesomeIcon icon={faStar}/>&nbsp;{hotel.score}</li>
                                        <li>
                                            <button className="btn btn-warning rounded-pill btn-sm btn-block mt-1">Book Now</button>
                                        </li>
                                    </ul> */}
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
                    <Col md={6} className="my-3">
                         <iframe title={locationName} className="rounded" src={map} width="90%" height="540" frameBorder="1" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Col>                
                </Row>
            </Container>
            </div> 
            </div> 
    );


    // const {id} = useParams();
    // const {hotels, map} = hotelData.find(location => location.id === id);
    // console.log(hotels[0]);
    // return (        
    //     <div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
    //         <div className="col-1">
    //         </div>

    //         <div style={{color:'#ffffff'}} className="col-4 text-center">
    //             <div className="card card-inverse card-info">
    //                 {
    //                      hotels.map(hotel => 
    //                         <Row key={hotel.name} className="align-items-stretch bg-light p-3 text-dark rounded my-3">
    //                             <Col sm={6}>
    //                                 <img src={hotel.photo} alt="" className="w-100 h-100 mb-3"/>
    //                             </Col>
    //                             <Col sm={6}>
    //                                 <h5>{hotel.name}</h5>
    //                                 <div className="d-flex justify-content-between">
    //                                     <h6>{hotel.rating}<span className="w-25 mb-1 mr-1"> <FontAwesomeIcon icon={faStar} /></span></h6>
    //                                     <h6>Night: ${hotel.perNight}</h6>
    //                                 </div>
    //                                 <ul className="list-unstyled mt-4">
    //                                     <li>AC / nonAC, Free Wifi, Bathroom</li>
    //                                     <li>
    //                                         <button className="btn btn-warning rounded-pill btn-sm btn-block mt-1">Book Now</button>
    //                                     </li>
    //                                 </ul>
    //                             </Col>
    //                         </Row>

    //                         // `<img className="card-img-top" src=${hotel.photo} alt=""></img>
    //                         // <div className="card-body">
    //                         //         <h4 className="card-title mt-3">${hotel.locationName}</h4>
    //                         //         <div className="meta card-text">
    //                         //         <span className="float-right">
    //                         //             <FontAwesomeIcon icon={faDollarSign} />&nbsp;<strong>${hotel.rate}</strong>
    //                         //         </span>
    //                         //         </div>
    //                         //         <div className="card-text">
    //                         //             ${hotel.description}
    //                         //         </div>
    //                         //     </div>
    //                         //     <div className="card-footer">
    //                         //         <FontAwesomeIcon icon={faClock} /> <strong>{hotel.price}</strong><span> (Total Hours)</span>
    //                         // </div>`
    //                      )
    //                 }   
    //             </div>
    //         </div>
    //         <div className="col-1">
    //         </div>
    //         <div className="col-4 text-center"> 
    //             {/* <iframe title={locationName} src={map} width="100%" height="675" frameBorder="1" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
    //         </div> 
    //     </div>   
    // );
};

export default Hotel;