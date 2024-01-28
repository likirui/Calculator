import React from 'react';
import './displayrow.css';

const DisplayRow = (props) =>{
return (
    <input type='text' readOnly className='screen' style = {props.textSize} value = { props.value }></input>
);
};
export default DisplayRow;