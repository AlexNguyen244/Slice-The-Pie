// Template for each input 
//props will handle color and name of each input tag 
import React, { useRef, useEffect, useState } from 'react';
import './App.css';

// Import whats necessary for tooltip (popuo)
import { withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

// Styling only for the tooltip
const Popup = withStyles({
  tooltip: {
    color: "black",
    backgroundColor: "#71a8ff",
    padding: "5%",
    fontSize: "12px"
  },
  arrow: {
    color: "#71a8ff"
  }
})(Tooltip);


function InputBox(props){
  const callback = props.callback; // callback to return the input data
  const getInfo = props.getInfo; // callback function to get info specific to the function
  const name = props.varName; // Name to display
  const color = props.color; // Color to be shown
  const key = props.id; // A key assigned to the index in the parents array to keep track
  const type = props.type; // Type (revenue or expense) since this child is used for both

  // Dynamically assign ids to each input given the type and name of funciton
  const id = type + ": " + name;

  // Updated styles that need to be changed at child level
  var circle_style = { background: color }
  var input_tag_style = { marginLeft: "auto" }

  function onChangeInput(event){
    var input = Number(event.target.value); // get value
    if (event.target.value < 0){
      event.target.value = 0;
      return;
    }

    let currTotal = props.getTotalInput(key, type); 
    if (currTotal + input > 100) {
      callback (key, 100-currTotal, type);
      event.target.value = 100 - currTotal; // set value
    } else {
      callback (key, input, type);
    }
  }

  // States of tooltip and handling the open and close functions
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleKeyDown = (event) => {
    if(event.key == '-' || event.key == '+'){ //stops - or + from being entered 
      event.preventDefault();

    }
  }

  return(
    <div className="input-bar-wrapper">  
      <div className="colored-circle" style={circle_style} />
       <div className="input-name"> 
        {name} 
        <Popup className = "tooltip" open={open} onClose={handleClose} onClick = {handleOpen} onOpen={handleOpen} title={getInfo(key, type)} arrow>
          <div className="info-circle"> i </div>
        </Popup>
       </div> 
      <input className="input-tag" id={id} type="number"  onKeyDown={handleKeyDown} onChange = {onChangeInput}  style={input_tag_style} placeholder="0" /><p className="percent"> % </p>
    </div>
  )
}


export default InputBox;