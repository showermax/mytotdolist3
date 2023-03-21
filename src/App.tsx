import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./Components/Todolist";
import {v1} from "uuid";

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), name: 'Initial task', isDone: false},
        {id: v1(), name: 'Initial task1', isDone: false},
        {id: v1(), name: 'Initial task2', isDone: false},
        {id: v1(), name: 'Initial task3', isDone: false},
        {id: v1(), name: 'Initial task4', isDone: false}
    ])

  const statusChange = (id: string) => {
      setTasks(tasks.map(el=> el.id === id ? el = {...el, isDone: !el.isDone} : el))
  }
  const addTask =()=>{
        setTasks([...tasks, {id: v1(), name: 'newName', isDone: false}])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          All you need to get things done ver.3.0 beta
        </p>
      </header>

      <Todolist title='Inbox' tasks={tasks} statusChange={statusChange} addTask={addTask}/>

    </div>
  );
}

export default App;
