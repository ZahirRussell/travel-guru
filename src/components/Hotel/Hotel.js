import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
    const {placeType} = useParams();
    const [hotel, setHotel] = useState([])
    useEffect(() => {
        fetch(`../../Data/HoteData.js/${placeType}`).then(
            res => setHotel(res.data)
        )
    })
    return (        
        <div style={{textAlign: 'center'}}>
            <br></br>
            <br></br>
            <br></br>

            <div className="col-sm-4 col-md-4 mt-3">
                    <div className="card card-inverse card-info">
                        <img className="card-img-top" src={hotel.imgUrl} alt=""></img>
                        <div className="card-body">
                            <h4 className="card-title mt-3">{hotel.title}</h4>
                            <div className="meta card-text">
                            <span className="float-right">
                                <FontAwesomeIcon icon={faDollarSign} />&nbsp;<strong>{hotel.price}</strong>
                            </span>
                            </div>
                            <div className="card-text">
                                {hotel.description}
                            </div>
                        </div>
                        <div className="card-footer">
                            <FontAwesomeIcon icon={faClock} /> <strong>{hotel.price}</strong><span> (Total Hours)</span>
                       </div>
                    </div>
                </div> 
        <h1 className="place-header">Let's choos a Room in {placeType}.</h1>
        <p className="place-header">Want a <Link to="/home">different place?</Link> </p>
    </div>
    );
};

export default Hotel;