import React from 'react'
import "./counter.css"
import { useState } from 'react';

const Counter = () => {

//   let count = 0;

    let [count, setCount] = useState(10)

  function handleAdd(){
    setCount(count+1)
  }

  function handleSub(){
    if(count < 1){
        return(
            alert("Nind se jag jao")
        )
    }
    setCount(count-1)

  }

  return (
    <div className='box'>
        <p>Total count = {count}</p>
        <button onClick={handleAdd} className='add'>Addition</button>
        <button onClick={handleSub} className='sub'>Substract</button>
    </div>
  )
}

export default Counter