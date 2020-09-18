import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import hotelData from '../../Data/HotelData';


const Slider = ({deviceType}) => { 
    const locations = hotelData;
    return (
        <div style={{marginTop:'100px'}}>
        <Carousel >
            {locations.map(location => {
                return (
                    <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-1">
                        </div>
                        <div className="col text-center">
                            <img className="rounded" src={location.photo} alt="First slide"/>
                        </div>

                        <div className="col-5 text-center">
                        <span className="carousel-caption-custom">                    
                             <h1 className="place-header">{location.locationName}</h1>
                                <p className="place-detail text-justify">{location.description}</p>
                                 {/* <button type="button" onClick={() => handleBook(location.locationName,location.description)} variant="contained" color="primary" className="btn btn-warning">
                                <span className="glyphicon glyphicon-search"></span>
                                    Booking</button> */}
                                     <Link className="link" to={`/book/${location.id}`}>
                                        <Button variant="warning">See Booking</Button>
                                    </Link>
                                   
                            </span>
                        </div>

                    </div>
                </Carousel.Item>
                );
            })}
         </Carousel> 
    </div>
    );
};

export default Slider;