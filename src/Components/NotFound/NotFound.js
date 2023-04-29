import React from 'react';
import { useHistory } from 'react-router';
import pages from '../img/404.jpg'
const NotFound = () => {
    const history = useHistory();

    const back = () =>{
        history.push('/home')
    }
    return (
        <div>
            <img className="w-100" src={pages} alt="" />
            <br />
            <button onClick={back} className="btn btn-danger w-25 mt-4 m-4">Go Back</button>
        </div>
    );
};

export default NotFound;