import React from 'react';
import Banner from './Banner/Banner';
import Booking from './Booking/Booking';
import Choose from './Choose/Choose';
import Header from './Header/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Choose></Choose>
            <Booking></Booking>
        </div>
    );
};

export default Home;