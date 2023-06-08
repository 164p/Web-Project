import React, { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import ItemCard from '../components/Itemcard/Itemcard.js';
import axios from 'axios';

const Profile = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuthContext()

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowItemList');
      });
  }, []);

  const itemList =
    items.length === 0
      ? 'No item in your inventory'
      : items.map((item, k) => <ItemCard item={item} key={k} />);

  return (
    <div>
      {user && (
        <div>
          <h1>"{user.username}" Inventory</h1>
        </div>
      )}
      <span>Inventory {items.length}/9999</span>
          <hr/>
          <div className='list'>{itemList}</div>
    </div>

  );
};

export default Profile;
