
import './Details.scss';
import { PiPlusBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  setImageFile, setPersonalinfo } from '../store/dataSlice';

const Details = () => {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

const handleNameChange=(e)=>{
  dispatch(setPersonalinfo({age:e.target.value}));
}
  
  const handleAgeChange = (e) => {
    dispatch(setPersonalinfo({ age: e.target.value }));
  };

  const handleAddress = (e) => {
    dispatch(setPersonalinfo({ address: e.target.value }))
  }

  const handleDob = (e) => {
    dispatch(setPersonalinfo({ dob: e.target.value }))
  }

  const handlePhoneno = (e) => {
    dispatch(setPersonalinfo({ phone: e.target.value }))
  }

  const handleFileChange=(e)=>{
    const file = e.target.files[0];
    dispatch(setImageFile(file))
  }

  const handleSubmit = () => {
    dispatch(setPersonalinfo(name.age))
  }
  return (
    <div className='container'>
      <div className='left'>
        <h3>Personal details</h3>
        <label>Name:</label>
        <input type='text' placeholder='Enter your name' onChange={handleNameChange} value={name.name} />
        <label>Age:</label>
        <input type='number' placeholder='Enter your age' onChange={handleAgeChange} value={name.age} />
        <label>Address:</label>
        <input type='text' placeholder='Address' onChange={handleAddress} value={name.address} />
        <label>Date of birth:</label>
        <input type='date' placeholder='DOB' onChange={handleDob} value={name.dob} />
        <label>Phone:</label>
        <input type='number' placeholder='Enter your phone number' onChange={handlePhoneno} value={name.phone} />

        <h3>Education details</h3>
        <textarea placeholder='Highest Qualification'></textarea>
        <textarea placeholder='Institution'></textarea>
       
          <PiPlusBold />
        
      </div>
      <div className='right'>
        <label>Upload Your Photo</label>
        <input type='file' onChange={handleFileChange} />

        <br />
        <br />
        <br />
        <br />
        <br /><br /><br />
        <br />
        <br /><br /> <br /> <br /><br /><br />
        <h3>Work experience</h3>
        <textarea placeholder='Company'></textarea>
        <textarea placeholder='Year'></textarea>
    
          <PiPlusBold />
        
        <div className='btn'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
