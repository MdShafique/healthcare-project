import React from 'react';
import './Services.css'
import imgs from '../../img/doctors1.jpg';
import imgs1 from '../../img/doctors2.jpg';
import imgs2 from '../../img/doctors3.jpg';
import imgs3 from '../../img/doctors4.jpg';

const Service = () => {
    const doctors = [
    {name:'Medical care and care',
     discription: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....', 
     img: imgs},
    {name:'Care and help at home',
     discription: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....', 
     img: imgs1},
    {name:'Specialized care',
     discription: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....', 
     img: imgs2},
    {name:'Doctor’s visit to the house',
     discription: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....', 
     img: imgs3},
    {name:'Medical care and care',
     discription: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....', 
     img: imgs},
    {name:'Care and help at home',
     discription: 'Responsible and diligent approach to each patient. The optimum ratio of price and quality. High quality health care and service....', 
     img: imgs1},
    {name:'Specialized care',
     discription: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....', 
     img: imgs2},
    {name:'Doctor’s visit to the house',
     discription: 'High quality health care and service. Advanced medical technologies and innovative diagnosis and treatment methods....', 
     img: imgs3},
    ];
    return (
           <div className="service-container mt-5">
            {
                doctors.map(doctor => <div className="service mt-5">
                   <img className="w-100" src={doctor.img} alt="" />
                    <h3>{doctor.name}</h3>
                    <p>{doctor.discription}</p>
                </div>)   
            }
           </div>
        
    );
};

export default Service;