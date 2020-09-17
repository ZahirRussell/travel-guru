import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Book.css';

const Book = () => {
    const {placeType,description} = useParams();
    const history = useHistory();
    const handleHotel = (placeType)=>{
        const url = `/hotel/${placeType}`;
        history.push(url);
    }
    return (
        <div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
            <div className="col-1">
            </div>

            <div style={{color:'#ffffff'}} className="col-4 text-center">
                <h1 className="place-header">{placeType}</h1>
                <h4 className="place-detail">{description}</h4>
                <p>Want a <Link to="/home">different place?</Link> </p>
            </div>
            <div className="col-1">
            </div>
            <div className="col-4 text-center"> 
                <form className="myForm">
                        <div className="form-group">
                            <label className="col-md-4 control-label">Origin</label>
                            <div className="col-md-8 r">
                               <input id="origin" className="form-control"/>
                            </div>
                         </div>
                         <div className="form-group">
                            <label className="col-md-4 control-label">Destination</label>
                            <div className="col-md-8 ">
                            <input id="destination" value={placeType} className="form-control"/>
                            </div>
                         </div>

                         <div className="form-group">
                            <label className="col-md-4 control-label">From</label>
                            <div className="col-md-8 inputGroupContainer">
                            <input type="datetime-local" id="from" className="form-control"/>
                            </div>
                         </div>

                         <div className="form-group">
                            <label className="col-md-4 control-label">To</label>
                            <div className="col-md-8">
                               <input type="datetime-local" id="to" className="form-control"/>
                            </div>
                         </div>

                       

                    <div className="form-group">
                        <button className="btn btn-block btn-warning" onClick={() => handleHotel(placeType)} variant="contained" color="primary">Save</button>
                    </div>
                </form>
            </div>
            <div className="col-1">
            </div>
        </div>
    );
};

export default Book;