import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateItem = (props) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    release: '',
    discontinued: '',
    manufacturer: '',
    image: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/items', item)
      .then((res) => {
        setItem({
            name: '',
            release: '',
            discontinued: '',
            manufacturer: '',
            image: '',
        });

        navigate('/item');
      })
      .catch((err) => {
        console.log('Error in CreateItem!');
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/item' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Create Game Console</h1>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
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
                <input
                  type='text'
                  placeholder='Image URL'
                  name='image'
                  className='form-control'
                  value={item.image}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;