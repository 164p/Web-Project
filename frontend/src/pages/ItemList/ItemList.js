import React, { useState, useEffect } from 'react';
import './ItemList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ItemCard from '../../components/Itemcard/Itemcard.js';

function ShowItemList() {
  const [items, setItems] = useState([]);

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
            <h2 className='display-4 text-center'>Game Console List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-item'
              className='btn btn-outline-warning float-right'
            >
              + Add New Game Console
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{itemList}</div>
      </div>
    </div>
  );
}

export default ShowItemList;