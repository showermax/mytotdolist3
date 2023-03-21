import React from 'react';
import {SuperButton} from "./SuperButton";

export type TodolistPropsType  ={
    tasks: TaskType[]
    title: string
    statusChange: (id: string) => void
    addTask:()=> void
}

export type TaskType ={
    id: string
    name: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {
    const

    const checkboxOChangeHandler = (id: string)=>{
        props.statusChange(id)
    }
    const addTaskButtonHandler = ()=>{
    props.addTask()
    }

    return (
        <div className='todolist'>
            <div className='todolist-header'> {props.title}</div>
            <div className={'add-input'}>
                <input/>
               <SuperButton title={'Add'} buttonCallback={addTaskButtonHandler} />
            </div>
            <ul>
                {props.tasks.map(el =>
                <li key = {el.id}>
                    <input type={"checkbox"} checked={el.isDone} onChange={()=>checkboxOChangeHandler(el.id)}/>
                    {el.name}
                    <button>x</button>
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