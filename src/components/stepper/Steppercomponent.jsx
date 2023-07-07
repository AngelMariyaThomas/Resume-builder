import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
// import "react-stepper-horizontal/src/Stepper.css";
import Finalpage from "../finalpage/Finalpage";
import Homepage from "../homepage/Homepage";
import Details from "../details/Details";
import './Stepper.scss';

export const Steppercomponent = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevious = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    return (
      <div>
        <Stepper
          steps={[
            { title: "" },
            { title: "" },
            { title: "" }
          ]}
          activeStep={currentPage}
        />
        
        {currentPage === 0 && <Homepage/>}
        {currentPage === 1 && <Details />}
        {currentPage === 2 && <Finalpage />}
        
        <button disabled={currentPage === 0} onClick={handlePrevious}>
          Previous page
        </button>
        <button disabled={currentPage === 2} onClick={handleNext}>
          Next page
        </button>
      </div>
    );
  };
 
