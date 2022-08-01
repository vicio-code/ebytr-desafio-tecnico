import React, { useState , useEffect} from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { ITask } from './interfaces'

export default function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect( () =>  {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data  = await fetch('http://localhost:3001/')
    const taskList = await data.json()
    setTasks(taskList)
  }

  const taskList = tasks.map(task => (
    <Task key={task.id} content={task.content} status={task.status} />
  ))

  const create = (newTask: ITask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className='flex justify-center rounded bg-emerald-800 shadow max-w-2xl flex-col p-8'>
        <TaskForm createTask={create}/>
        <ul>
          {taskList}
        </ul>
    </div>
  )
}
