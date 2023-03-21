import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FilterType, Todolist} from "./Components/Todolist";
import {v1} from "uuid";

function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), name: 'Initial task', isDone: false, priority: 'Low', today: false},
        {id: v1(), name: 'Initial task1', isDone: false, priority: 'Low', today: false},
        {id: v1(), name: 'Initial task2', isDone: false, priority: 'High', today: false},
        {id: v1(), name: 'Initial task3', isDone: false, priority: 'Low', today: false},
        {id: v1(), name: 'Initial task4', isDone: false, priority: 'Low', today: false}
    ])
    const [filter,setFilter]=useState<FilterType>('All')
    const statusChange = (id: string) => {
        setTasks(tasks.map(el => el.id === id ? {...el, isDone: !el.isDone} : el))
    }

    const priorityChange = (id: string, newpriority: string) => {
        setTasks(tasks.map(el => el.id === id ? {...el, priority: newpriority} : el))
    }
    const addTask = (newTaskName: string) => {
        setTasks([...tasks, {id: v1(), name: newTaskName, isDone: false, priority: 'Low priority', today: false}])
    }
    const deleteTask = (id: string) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const moveTask = (id: string, td: boolean) => {
        setTasks(tasks.map(el => el.id === id ? {...el, today: !td} : el))
    }
    let todayTasks = tasks.filter(el => el.today)
    let inboxTasks = tasks.filter(el => !el.today)
const changeFilter =(f:FilterType) =>{
        setFilter(f)
}
    const filterTasks =(filter: FilterType)=>{
        //
        switch(filter){
            case 'Done': return inboxTasks.filter(el=>el.isDone)
            case 'To-do': return inboxTasks.filter(el=>!el.isDone)
            default: return inboxTasks
            }
    }
    console.log(tasks)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    All you need to get things done ver.3.0 beta
                </p>
            </header>
            <div className={"main"}>
                <Todolist title='Inbox' tasks={filterTasks(filter)} statusChange={statusChange} addTask={addTask}
                          priorityChange={priorityChange} deleteTask={deleteTask} moveTask={moveTask} changeFilter={changeFilter}/>
                <Todolist title='Today' tasks={todayTasks} statusChange={statusChange} addTask={addTask}
                          priorityChange={priorityChange} deleteTask={deleteTask} moveTask={moveTask} changeFilter={()=> setFilter(filter)}/>
                <Todolist title='Today' tasks={filterTasks('Done')} statusChange={statusChange} addTask={addTask}
                          priorityChange={priorityChange} deleteTask={deleteTask} moveTask={moveTask} changeFilter={()=> setFilter(filter)}/>
            </div>
        </div>
    );
}

export default App;
