import React from 'react';
import Slider from '../Slider/Slider';
import './Home.css';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';


const Home = () => {

    // const style = {
    //     display: 'flex',
    //     margin: '40px',
    //     justifyContent: 'space-between'
    // }
    const places = [
        {
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: {sundorbon},            
            PlaceType: 'Sondorbon',
            avatar: 'S',
        },
        {
            title: 'Couple Power Room',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: {Sajek},
            PlaceType: 'Sajek',
            avatar: 'D',
        },
        {
            title: 'Family Capacity Room',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: {Sreemongol},
            PlaceType: 'Sreemongol',
            avatar: 'F',
        }
    ]

    return (
    <div>        
         {/* <section style={{marginTop:'60px'}}>
            <div class="container">
                {
                    places.map(place => <Slider key={place.placeType} place={place}></Slider>)
                }
            </div>
        </section>     */}

        <Slider/>
    </div>
        
    );
};

export default Home;
