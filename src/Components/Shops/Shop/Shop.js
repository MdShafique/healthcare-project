import React from 'react';
import { Link , useHistory} from 'react-router-dom';

const Shop = ({shop}) => {
  const {id, img, name, price} = shop;
  const history = useHistory();
  const buyNow = () =>{
    history.push('/login')
  }
    return (
        <div className="col-lg-4 col-sm-6 col-12">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h2>${price}</h2>
          <button onClick={buyNow} className="btn btn-danger mb-5">Buy Now</button>
          <br />
          <Link to={`/Detils/${id}`}>Show Details</Link>
        </div>
    );
};

export default Shop;