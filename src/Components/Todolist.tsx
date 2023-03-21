import React, {useState} from 'react';
import {SuperButton} from "./SuperButton";
import SuperInput from "./SuperInput";

export type TodolistPropsType = {
    tasks: TaskType[]
    title: string
    statusChange: (id: string) => void
    addTask: (s: string) => void
}

export type TaskType = {
    id: string
    name: string
    isDone: boolean
}

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
                {props.tasks.map(el =>
                    <li key={el.id}>
                        <div>
                            <input type={"checkbox"} checked={el.isDone}
                                   onChange={() => checkboxOChangeHandler(el.id)}/>
                            {el.name}
                        </div>
                        <button>X</button>
                    </li>
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