import React from 'react';
import './LogIn.css'
import useAuth from './../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAddressBook, } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const element = <FontAwesomeIcon icon={ faAddressBook} />

    const {GoogleUsingSignIn, FacebookWithSigIn} = useAuth();
  

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
  /*   console.log('came from', location.state?.from) */

    const handleGoogleLogIn = () =>{
      GoogleUsingSignIn()
      .then((result) => {
      history.push(redirect_uri);
    })
      
    }

    return (
        <div className="mt-5">
          
             <div className="d-flex justify-content-center">
          <div className="mt-5 shadow-lg text-center size mb-5">
            <div className="input-style  text-center"> 
            <h2 className="mt-2">Register Or Login</h2>
               <input  placeholder="Name" type="text" />
               <br />
               <input placeholder="Email" type="text" />
               <br />
               <input placeholder="Password" type="text" />
               <br />
               <input placeholder="Confrim Password" type="text" />
               <br />
               <button className="btn-style">{element} Sign Up</button>
               <br />
              <div>---------or-------</div>
              <button onClick={handleGoogleLogIn} className="btn-style bg-primarys">{element} Login</button>
              <br />
              <br />
              <button onClick={FacebookWithSigIn} className="btn-style bg-infos">{element} Facebook</button>
            </div>
           </div>
          </div> 
        </div>
    );
};

export default Login;