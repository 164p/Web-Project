import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateItem.css';

function UpdateItem(props) {
  const [item, setItem] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/items/${id}`)
      .then((res) => {
        setItem({
          name: res.data.name,
          release: res.data.release,
          discontinued: res.data.discontinued,
          manufacturer: res.data.manufacturer,
          image: res.data.image,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: item.name,
      release: item.release,
      discontinued: item.discontinued,
      manufacturer: item.manufacturer,
      image: item.image,
    };

    axios
      .put(`http://localhost:4000/api/items/${id}`, data)
      .then((res) => {
        navigate(`/show-item/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Game Console Name'
                name='name'
                className='form-control'
                value={item.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='release'>Release Date</label>
              <input
                type='date'
                placeholder='Release Date'
                name='release'
                className='form-control'
                value={item.release}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='discontinued'>Discontinued date</label>
              <input
                  type='date'
                  placeholder='Discontinued Date'
                  name='discontinued'
                  className='form-control'
                  value={item.discontinued}
                  onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='manufacturer'>Manufacturer</label>
              <input
                  type='text'
                  placeholder='Manufacturer'
                  name='manufacturer'
                  className='form-control'
                  value={item.manufacturer}
                  onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='image'>Image URL</label>
              <input
                  type='text'
                  placeholder='Image URL'
                  name='image'
                  className='form-control'
                  value={item.image}
                  onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateItem;