import React from 'react'
import { useSelector } from 'react-redux'
import './Finalpage.scss'

const Finalpage=()=> {
  const name=useSelector((state)=>state.name)
  console.log(name);
  return (
    
    <div className="full">
    <div className="left">
      <div className="image">
         {name.personalinfo.file && <img src={URL.createObjectURL(name.personalinfo.file)} alt="Uploaded" />}
          
        
      </div>
      <div className="Contact">
        <h2>Personal info</h2>
         <p>
         <b>Name:</b>     
         <p>{name.name}</p>
         <b>Age:</b>
         <p>{name.personalinfo.age}</p>
         <b>Address:</b>
         <p>{name.personalinfo.address}</p>
         <b>Date of birth:</b>
         <p>{name.personalinfo.dob}</p>
         <b>Mobile no :</b>
          <p>{name.personalinfo.phone}</p>
       
        </p>
      </div>

       </div>
    <div className="right">
      <div className="name">
        <h1>{name.name}</h1>
      </div>
  
      <div className="Experience">
        <h2>Experience</h2>
        <h3>Abc webdev pvt ltd - Senior Web Developer</h3>
        <p>January 2022 to Present</p>
        
        <h3>Xyz webdev pvt ltd - junior web developer</h3>
        <p>August 2021 to December 2021</p>
        
      </div>
      <div className="Education">
        <h2>Education</h2>
        <table>
          <tr>
            <th>University/college</th>
            <th>Passing year</th>
            <th>percentage/cgpa</th>
          </tr>
          <tr>
            <td>xyz</td>
            <td>2020</td>
            <td>8.9</td>
          </tr>
          <tr>
            <td>pqr</td>
            <td>2018</td>
            <td>89%</td>
          </tr>
        </table>
      </div>
      
    </div>
  </div>
);
};


export default Finalpage