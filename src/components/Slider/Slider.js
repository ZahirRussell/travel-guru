import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from 'react-router-dom';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';

const Slider = ({deviceType}) => {
    // const{title,description,imgUrl,PlaceType} = props.place;
    const history = useHistory();
    const handleBook = (placeType,description)=>{
        const url = `/book/${placeType}/${description}`;
        history.push(url);
    }

   
      const places = [
        {
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities. Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl:  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            placeType: 'Sondorbon',
        },
        {
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends. Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            placeType: 'Sajek',
        },
        {
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area. Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl:      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            placeType: 'Sreemongol',
        }
    ]     



    return (
        <div style={{marginTop:'100px'}}>
        <Carousel >
            {places.map(place => {
                return (
                    <Carousel.Item>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-1">
                        </div>
                        <div className="col text-center">
                            <img src={place.imgUrl} alt="First slide"/>
                        </div>

                        <div className="col-5 text-center">
                        <span className="carousel-caption-custom">                    
                             <h1 className="place-header">{place.title}</h1>
                                <p className="place-detail">{place.description}</p>
                             <button type="button" onClick={() => handleBook(place.placeType,place.description)} variant="contained" color="primary" className="btn btn-warning">
                                <span className="glyphicon glyphicon-search"></span>
                                    Booking</button>
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