import { useState } from 'react'
import './body.css'

const Body = () => {
    const[counter, setCounter] = useState(0)

    function addHandler(){
        setCounter(counter+1)
    }

    function subHandler(){
        if(counter <= 0){
            alert("Number is equal to zero you can't decrease")
        }else
            setCounter(counter-1)
    }

  return (
    <div className='box'>
        <h3>Total count = {counter}</h3>
        <button onClick={addHandler}>Add</button>
        <button onClick={subHandler}>Sub</button>
    </div>
  )
}




export default Body