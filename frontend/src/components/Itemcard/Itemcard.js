import React from 'react';
import { Link } from 'react-router-dom';
import './Itemcard.css';

const ItemCard = (props) => {
  const item = props.item;

  return (
    <div className='card-container'>
      <img height={200} src={item.image}></img>
      <div className='desc'>
      <h2>
        <Link to={`/show-item/${item._id}`}>{item.name}</Link>
      </h2>
      <p>{item.manufacturer}</p>
      </div>
    </div>
  );
};



export default ItemCard;