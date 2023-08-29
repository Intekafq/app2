

import React, {useState} from 'react';

function Usehooks() {

  const [num, setNum]= useState(false)

  function inc()
  {
    setNum(num +1)
  }
  function dinc()
  {
    setNum(num - 1)
  }
  return (
    <div className="App text">
      <h1>useState Hooks</h1>
      <div className='main'>
      
        <h2 className='heading'>{num}</h2>
        <button className='btn1' onClick={inc}>Increment</button>
        <button className='btn1' onClick={dinc}>Decrement</button>
      </div>
    </div>
  );
}

export default Usehooks;
