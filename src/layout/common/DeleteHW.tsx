import { HomeworkInterface } from '@/utils/interfaces'
import React from 'react'
import ButtonUi from './form/ButtonCom';

function DeleteHW(props: { data: HomeworkInterface }) {
    const { data } = props;
    return (
        <div className='w-full p-2 text-sm bg-red-100 rounded shadow-md text-blue-950 md:text-base'>
            <p>Title: {data.heading}</p>
            <p> by {data.author.userName}</p>
            <p>Class: {data.class}</p>
            <p>Are you sure to delete above homework ?</p>
            <div className='flex justify-center pt-10'>
                <ButtonUi type='submit' label='Delete' />
            </div>

        </div>
    )
}

export default DeleteHW