import React from 'react';
import DisplayRow from './DisplayRow';
const Display = (props) => {
  return  (<div>
     <DisplayRow value = {props.answer} textSize = {{fontSize: '20px' }} />
      <DisplayRow value = {props.user} textSize = {{fontSize: '20px' }} />
    </div>)
};
export default Display;