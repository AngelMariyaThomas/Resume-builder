
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Homepage.scss';
import { setNameAsync } from '../store/dataSlice';

const Homepage = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setNameAsync(name));
  };

  return (
    <div className='container'>
     
   <h1>Build Your Resume</h1>
      <div className='card'>
        <label>Enter Your name:</label>
        <input
          type='text'
          placeholder='Enter Your Name'
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Homepage;
