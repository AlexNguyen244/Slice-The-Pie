
import React, { useRef, useEffect, useState, setState } from 'react';
import "./App.css";

function ProgressBar(props){
  //console.log(props);
  const step = props.step;
  //console.log("The step is: ", step);
  var revenuesClass = "";
  var expensesClass = "";
  var compareClass = "";
  var expensesLine = "";
  var compareLine = "";

  switch(step){
    case 1:
      revenuesClass = "active"
      break;

    case 2:
      revenuesClass = "active"
      expensesClass = "active";
      expensesLine = "active-line";
      break;

    case 3: 
      revenuesClass = "active"
      expensesClass = "active";
      compareClass = "active";
      expensesLine = "active-line";
      compareLine = "active-line";
      break;

    case 4: 
      revenuesClass = "active"
      expensesClass = "active";
      compareClass = "active";
      expensesLine = "active-line";
      compareLine = "active-line";
      break;
      
    default:
      console.log("ProgressBar error. No active step assigned")
  }


  return(
    <div className="progress-bar-wrapper">

      <div className="labels">
        <p> REVENUES </p> 
        <p> EXPENSES </p> 
        <p> COMPARE </p> 

      </div>
        <div className="progress-bar">
    
          <div className="circle" id={revenuesClass}> </div>
          <div className="line" id={expensesLine}> </div>
            
          <div className="circle" id={expensesClass}> </div>
          <div className="line" id={compareLine}> </div>
            
          <div className="circle" id={compareClass}></div>
        
        </div> 
    
    </div>
  )
}

export default ProgressBar;