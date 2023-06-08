import React, { useState, useEffect } from 'react';
import './ItemList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ItemCard from '../../components/Itemcard/Itemcard.js';
import { useAuthContext } from '../../hooks/useAuthContext'

function ShowItemList() {
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
      ? 'there is no book record!'
      : items.map((item, k) => <ItemCard item={item} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='game-list'>Game Console</h2>
          </div>
          {user && (
              <div>
              <Link
              to='/create-item'
              className='btn btn-outline-warning float-right'
            >
              + Add New Game Console
            </Link>
              </div>
              )}

          <div className='col-md-11'>
            <hr />
          </div>
        </div>

        <div className='list'>{itemList}</div>
      </div>
    </div>
  );
}

export default ShowItemList;