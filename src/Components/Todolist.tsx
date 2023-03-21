import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import SuperInput from "./SuperInput";

export type TodolistPropsType = {
    tasks: TaskType[]
    title: string
    statusChange: (id: string) => void
    addTask: (s: string) => void
    priorityChange:(id: string, newpriority: string)=> void
}

export type TaskType = {
    id: string
    name: string
    isDone: boolean
    priority: string
}
//export type PriorityType = 'High'| 'Normal' | 'Low'

export function Todolist(props: TodolistPropsType) {
    const [newTaskName, setNewTaskName] = useState<string>('')

    const checkboxOChangeHandler = (id: string) => {
        props.statusChange(id)
    }

    const addTaskButtonHandler = (s: string) => {
        props.addTask(s)
        setNewTaskName('')
    }

    return (
        <div className='todolist'>
            <div className='todolist-header'> {props.title}</div>
            <div className={'add-input'}>
                <SuperInput placeholder={'Add your task...'} setContent={setNewTaskName} value={newTaskName}/>
                <SuperButton title={'Add'} buttonCallback={() => addTaskButtonHandler(newTaskName)}/>
            </div>
            <ul>
                {props.tasks.map(el => {
                    const selectOnchangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>{
                    console.log(e.currentTarget.value)
                        props.priorityChange(el.id, e.currentTarget.value)
                }
                return (
                    <li key={el.id}>
                        <div>
                            <input type={"checkbox"} checked={el.isDone}
                                   onChange={() => checkboxOChangeHandler(el.id)}/>
                            {el.name}
                            <select onChange={selectOnchangeHandler}>
                                <option selected={el.priority === 'Normal'}> Normal </option>
                                <option selected={el.priority === 'High'}> High</option>
                                <option selected={el.priority === 'Low'}> Low</option>
                            </select>
                        </div>
                        <button>X</button>
                    </li>)}
                )}
            </ul>
            <div className={'filterblock'}>
                <button>All</button>
                <button>To-do</button>
                <button>Done</button>
            </div>

        </div>
    )
}