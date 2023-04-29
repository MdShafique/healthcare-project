import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faImage, faAddressCard, } from '@fortawesome/free-solid-svg-icons'
import './Booking.css'
import { Link } from 'react-router-dom';
const Booking = () => {
    const element = <FontAwesomeIcon icon={faAddressCard} />
    const Booking = [
       {name: 'Work on schedule', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Modern treatment protocols', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Support of treatment', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: ' Graduated specialists', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Individual approach', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Work on schedule', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Work on schedule', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Modern treatment protocols', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Support of treatment', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: ' Graduated specialists', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Individual approach', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
       {name: 'Work on schedule', dis: 'Deeper appreciation and concern for our client’s investments and the human experience.'},
    ];
    return (
        <div className="Booking-container">
            {
                Booking.map(Book => <div className="Booking-containers shadow-lg bg-info">
                   {element}
                  <h2>{Book.name}</h2>
                  <p>{Book.dis}</p>
                  <button className="style-bt"><Link to="/Post" className="text-danger">Read More....</Link></button>
                </div>)
            }
        </div>
    );
};

export default Booking;