import React from 'react';
import { Link } from 'react-router-dom';
import './Itemcard.css';

const ItemCard = (props) => {
  const item = props.item;

  return (
    <div className='im'>
    <div className='card-container'>
      <img className='pic' src={item.image}></img>
    </div>
    <div className='desc'>
      <Link to={`/show-item/${item._id}`}>{item.name}</Link>
    <p className='manufacturer'>{item.manufacturer}</p>
    </div>
    </div>
  );
};



export default ItemCard;