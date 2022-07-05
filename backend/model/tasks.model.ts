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
    const updatedTask = await prisma.task.update({
        where: { id },
        data: {
            content,
            status
        }
    })
    return updateTask
}

async function deleteTask(id: number) {
    const deletedTask = await prisma.task.delete({
        where: { id }
    })
    return deleteTask
}

export {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}