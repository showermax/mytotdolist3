import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import SuperInput from "./SuperInput";

export type TodolistPropsType = {
    tasks: TaskType[]
    title: string
    statusChange: (id: string) => void
    addTask: (s: string) => void
    priorityChange: (id: string, newpriority: string) => void
    deleteTask: (id: string) => void
    moveTask: (id: string, td: boolean) => void
    changeFilter: (filter:FilterType)=>void
}

export type TaskType = {
    id: string
    name: string
    isDone: boolean
    priority: string
    today: boolean
}

//export type PriorityType = 'High'| 'Normal' | 'Low'
export type FilterType = 'All'| 'To-do' | 'Done'

export function Todolist(props: TodolistPropsType) {
    const [newTaskName, setNewTaskName] = useState<string>('')

    const checkboxOChangeHandler = (id: string) => {
        props.statusChange(id)
    }

    const addTaskButtonHandler = (s: string) => {
        props.addTask(s)
        setNewTaskName('')
    }
    const deleteTaskButtonHandler = (id: string) => {
        props.deleteTask(id)
    }
    const moveTaskButtonHandler = (id: string, td: boolean) => {
        props.moveTask(id, td)
    }
    const filterTasksButtonHandler =(filter: FilterType)=>{
        props.changeFilter(filter)
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
                        const selectOnchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
                            console.log(e.currentTarget.value)
                            props.priorityChange(el.id, e.currentTarget.value)
                        }
                        return (
                            <li key={el.id}>
                                <div className={'taskitem'}>
                                    <input type={"checkbox"} checked={el.isDone}
                                           onChange={() => checkboxOChangeHandler(el.id)}/>
                                    <div className ={el.isDone ? 'isdone': ''}>{el.name}</div>
                                    <select onChange={selectOnchangeHandler} value={el.priority}>
                                        <option> Normal</option>
                                        <option> High</option>
                                        <option> Low</option>
                                    </select>

                                </div>
                                <div className={'taskbuttons'}>
                                    {!el.isDone && <SuperButton title={el.today ? '<' : '>'}
                                                                buttonCallback={() => moveTaskButtonHandler(el.id, el.today)}/>}
                                    <SuperButton title={'X'} buttonCallback={() => deleteTaskButtonHandler(el.id)}/>
                                </div>
                            </li>)
                    }
                )}
            </ul>
            {props.title === 'Inbox' && <div className={'filterblock'}>
                <SuperButton title={'All'} buttonCallback={() => filterTasksButtonHandler('All')}/>
                <SuperButton title={'To-do'} buttonCallback={() => filterTasksButtonHandler('To-do')}/>
                <SuperButton title={'Done'} buttonCallback={() => filterTasksButtonHandler('Done')}/>
                {/*<button>All</button>*/}
                {/*<button>To-do</button>*/}
                {/*<button>Done</button>*/}
            </div>
        }

        </div>
    )
}