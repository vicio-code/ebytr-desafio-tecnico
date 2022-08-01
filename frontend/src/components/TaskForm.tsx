import React, { useState } from 'react'
import { ITask } from './interfaces'

interface ITaskForm {
    createTask: (newTask: ITask) => void
}

export default function TaskForm({createTask}: ITaskForm) {
    const [task, setTask] = useState("")

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => setTask(event.currentTarget.value)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const newTask = {content: task, status: 'pendente'}
        createTask(newTask)
        setTask('')
    }

    return (
        <div className='p-2'>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={task}
                    placeholder='> Nova Tarefa'
                    className='p-2 text-black'
                />
                <button className='bg-green-300 hover:bg-green-400 rounded-full h-10 w-10 text-black' type='submit'>+</button>
            </form>
        </div>
    )
}
