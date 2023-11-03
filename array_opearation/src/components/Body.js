import React from "react";
import { useState } from "react";
import './body.css'

const Body = () => {
  const [task, setTask] = useState([
    { id: 1, name: "Shiv", age: 28 },
    { id: 2, name: "Debojyoti", age: 29 },
    { id: 3, name: "Samrat", age: 29 },
    { id: 4, name: "Santu", age: 27 },
    { id: 5, name: "Bittu", age: 25 },
  ]);

  function handleDelete(id){
    setTask(task.filter(task => id !== task.id))
  }


  return <div className="box">
    <h1>Details:</h1>
    <ul>
        {task.map((tasks) =>(
            <li key={tasks.id}>
                <span>{tasks.id} </span>
                <span>{tasks.name}</span>
                <span>{tasks.age}</span>
                <button onClick={() => handleDelete(tasks.id)} className="delete">Delete</button>
            </li>
        ))}
    </ul>
  </div>;
};

export default Body;
