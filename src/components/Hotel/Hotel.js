import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Hotel = () => {
    const {placeType} = useParams();
    return (        
        <div style={{textAlign: 'center'}}>
            <br></br>
            <br></br>
            <br></br>
        <h1 className="place-header">Let's choos a Room in {placeType}.</h1>
        <p className="place-header">Want a <Link to="/home">different place?</Link> </p>
    </div>
    );
};

export default Hotel;