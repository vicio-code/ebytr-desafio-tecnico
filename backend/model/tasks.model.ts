import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IPayload {
    id: number,
    content: string,
    status: string
}

async function createTask({ content, status }: IPayload) {
    const newTask = await prisma.task.create({
        data: {
            content,
            status
        }
    })
    return newTask
}

async function getTasks() {
    const allTasks = await prisma.task.findMany()
    return allTasks
}

async function updateTask({ content, status, id }: IPayload) {
    console.log(id);
    
    const updatedTask = await prisma.task.update({
        where: { id },
        data: {
            content,
            status
        }
    })
    return updatedTask
}

async function deleteTask(id: number) {
    await prisma.task.delete({
        where: { id }
    })
}

export {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}