import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './itemDetail.css';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext'
function ItemDetail(props) {
  const [item, setItem] = useState({});
  const [collection, setCollection] = useState({});
  const { user } = useAuthContext()

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/items/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowItemDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:4000/api/items/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowItemDetails_deleteClick');
      });
  };
  const addToCollection = () => {
    const data = {
      username: user.name,
      name: item.name,
      release: item.release,
      discontinued: item.discontinued,
      manufacturer: item.manufacturer,
      image: item.image,
    };
    axios
      .post(`http://localhost:4000/api/collection`, data)
      .then((res) => {
        navigate('/item');
      })
      .catch((err) => {
        console.log('Error form ShowItemDetails_AddtoCollection');
      });
    console.log('Item added to collection');
  };

  const Item = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{item.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Release Date</td>
            <td>{item.release}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Discontinued Date</td>
            <td>{item.discontinued}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Manufacturer</td>
            <td>{item.manufacturer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/item' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>{item.name}</h1>
            <p className='lead text-center'>By {item.manufacturer}</p>
            <hr /> <br />
          </div>
          <div className='picture'>   
            <img src={item.image} alt={item.name} className='item-pic'/>
          </div>
          <div className='col-md-10 m-auto'>
            {Item}
            
          </div>
          {user && (
              <div>
            <div className='text-center'> {/* Add 'text-center' class */}
              <button
                type='button'
                className='btn btn-outline-success btn-lg'
                onClick={() => {
                  addToCollection(item._id)}}
              >
                Add to Inventory
              </button>
            </div>

              </div>

              )}
            {user && (
            <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(item._id);
              }}
            >
              Delete Item
            </button>
          </div>
                        )}
            {user && (
            <div className='col-md-6 m-auto' >
            <Link
              to={`/edit-item/${item._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Item
            </Link>
            </div>
              )}


        </div>
      </div>
    </div>
  );
  
}

export default ItemDetail;