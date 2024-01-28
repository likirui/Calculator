import React, { useState } from 'react';
import './layout.css';
import Display from './Display';



const Layout = (props) =>{
  let [input, setInput] = useState('0');
  let [result, setResult] = useState('');
    const handleClick = (event) => {
     const value = event.target.value;
     if(value === '='){
      if(input !==''){
        let res = '';
        try{
          res = eval(input)
        }catch(err){
          setResult('Math error');
        }
        if(res ===undefined){
         setResult('Math error');
        }
        else{
          setResult(input + '=')
          setInput(res)
        }
      }
     }
     else if(value === 'C'){
      setInput('0');
      setResult('');
     }
     else if(value === 'DEL'){
      let str = input;
      str = String(str).slice(0, str.length-1);
      setInput(str);
     }else if(input === '0'){
      setInput(value)
     }else{
      setInput(input +=value);
     }
    };
  return (
    <div className='frame'>
   
        <div className='calculator'>
        <br></br>
        <Display user= {input} answer = {result} />
         
            <div className='keys'>
               <input type='button' className='button clear' value={'C'} onClick={handleClick} ></input>
               <input type='button' className='button clear' value={'DEL'} onClick={handleClick} ></input>
               <input type='button' className='button operator' value={'%'} onClick={handleClick} ></input>
               <input type='button' className='button operator' value={'/'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'7'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'8'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'9'} onClick={handleClick} ></input>
               <input type='button' className='button operator' value={'*'} onClick={handleClick} ></input>

               <input type='button' className='button' value={'4'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'5'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'6'} onClick={handleClick} ></input>
               <input type='button' className='button operator' value={'-'} onClick={handleClick} ></input>

               <input type='button' className='button' value={'1'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'2'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'3'} onClick={handleClick} ></input>
               <input type='button' className='button operator' value={'+'} onClick={handleClick} ></input>

               <input type='button' className='button' value={'0'} onClick={handleClick} ></input>
               <input type='button' className='button' value={'.'} onClick={handleClick} ></input>
               <input type='button' className='button equal-sign' value={'='} onClick={handleClick} ></input>
            </div>
        </div>
    </div>
  );
};

export default Layout;