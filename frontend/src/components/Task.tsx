import React from 'react'
import { ITask } from './interfaces'

export default function Task({ content, status }: ITask) {
    return (
        <div className='p-2 flex items-center'>
            <div className='rounded bg-emerald-600 flex flex-grow justify-between items-center'>
                <p className='p-2 items-start'>{content}</p>
                <button className='bg-green-300 hover:bg-green-400    rounded-full h-8 w-8 text-black'>X</button>

            </div>
        </div>
    )
}
