import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Book.css';
import hotelData from '../../Data/HotelData';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';

const Book = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {id} = useParams();
    const bookingDetails = hotelData.find(location => location.id === id);
    const history = useHistory();
    const handleHotel = (locationName)=>{
        const url = `/hotel/${locationName}`;
        history.push(url);
    }
    return (
        <div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
            <div className="col-1">
            </div>

            <div style={{color:'#ffffff'}} className="col-4 text-center">
                <h1 className="place-header">{bookingDetails.locationName}</h1>
                <p className="text-justify">{bookingDetails.description}</p>
                <p>Want a <Link to="/home"><mark>different place?</mark></Link> </p>
            </div>
            <div className="col-1">
            </div>
            <div className="col-4 text-center"> 
                <form className="myForm" onSubmit={() =>handleHotel(bookingDetails.locationName)}>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Origin</label>
                            <div className="col-md-9">
                               <input type="text" id="origin" name="origin" className="form-control" required/>
                            </div>
                         </div>
                         <div className="form-group">
                            <label className="col-md-3 control-label">Destination</label>
                            <div className="col-md-9">
                            <input id="destination" name="destination" readOnly value={bookingDetails.locationName} className="form-control" required/>
                            </div>
                         </div>
                         
                         <div className="form-group">
                           <label className="col-md-3 control-label">From</label>
                            <div className="col-md-9">
                                <InputGroup>                            
                                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} id="from" className="form-control" />
                                    <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                                    </InputGroup.Append>                                
                                </InputGroup>
                            </div>
                        </div>
                         <div className="form-group">
                           <label className="col-md-3 control-label">To</label>
                            <div className="col-md-9">
                                <InputGroup>                            
                                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} id="to" className="form-control" />
                                    <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                                    </InputGroup.Append>                                
                                </InputGroup>
                            </div>
                        </div>


                    <div className="form-group">
                        <input type="submit" value="Start Booking" className="btn btn-block btn-warning"/>
                    </div>
                </form>
            </div>
            <div className="col-1">
            </div>
        </div>
    );
};

export default Book;