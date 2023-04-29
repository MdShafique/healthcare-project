import React from 'react';
import img1 from '../img/shop1.jpg'
import img2 from '../img/shop2.jpg'
import img3 from '../img/shop3.jpg'
import img4 from '../img/shop4.jpg'
import img5 from '../img/shop5.jpg'
import img6 from '../img/shop6.jpg'
import Shop from './Shop/Shop';

const Shops = () => {
    const Shops = [
        {name: 'Cold syrup', id: 1, img: img1, price: 24},
        {name: 'Comfort scan', id: 2, img: img2, price: 54},
        {name: 'Dental tab', id: 3, img: img3, price: 64},
        {name: 'Mucinex', id: 4, img: img4, price: 124},
        {name: 'Omron 7 series', id: 5, img: img5, price: 854},
        {name: 'Tab Crusher', id: 6, img: img6, price: 97},
        {name: 'Cold syrup', id: 7, img: img1, price: 254},
        {name: 'Comfort scan', id: 8,  img: img2, price: 54},
        {name: 'Dental tab', id: 9, img: img3, price: 64},
        {name: 'Mucinex', id: 10, img: img4, price: 124},
        {name: 'Omron 7 series', id: 11, img: img5, price: 854},
        {name: 'Tab Crusher', id: 12, img: img6, price: 97},
      ];
    return (
        <div className="row">
            {
                Shops.map(shop => <Shop 
                shop={shop}></Shop>)
            }
        </div>
    );
};

export default Shops;