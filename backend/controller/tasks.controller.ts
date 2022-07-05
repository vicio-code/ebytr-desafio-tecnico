import {Request, Response} from 'express'
import {getTasks, createTask, updateTask, deleteTask} from '../model/tasks.model'

export async function read(_req: Request, res: Response) {
    const tasks = await getTasks()
    res.status(200).json(tasks)
}

export async function create(req: Request, res: Response) {
    const {payload} = req.body
    console.log(payload);
    
    const newTask = await createTask(payload)
    res.status(200).json(newTask)
}

export async function update(req: Request, res: Response) {
    const {payload} = req.body
    const updatedTask = await updateTask(payload)
    res.status(200).json(updatedTask)
}

export async function remove(req: Request, res: Response) {
    const {id} = req.params
    await deleteTask(Number(id))
    res.status(200).json('deleted')
}