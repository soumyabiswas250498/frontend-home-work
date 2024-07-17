import { HomeworkInterface } from '@/utils/interfaces'
import React, { useEffect } from 'react'
import ButtonUi from '../form/ButtonCom';
import { useDeleteHomeworkMutation } from '@/redux/apiSlice';
import { toast } from 'sonner';

function DeleteHW(props: { data: HomeworkInterface, refetch: any, setIsOpen: any }) {
    const { data, refetch, setIsOpen } = props;
    const [deleteHomework, { isSuccess, error, isLoading }] = useDeleteHomeworkMutation();

    const handleDelete = (id: string) => {
        deleteHomework(id)
    }

    useEffect(() => {
        if (error) {
            // @ts-ignore
            toast.warning(`Deletion Failed! ${error?.data?.message}`)
        }
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            refetch();
            toast.success('Deleted successfully');
            setIsOpen(false)
        }
    }, [isSuccess])

    return (
        <div className='w-full p-2 text-sm bg-red-100 rounded shadow-md text-blue-950 md:text-base'>
            <p>Title: {data.heading}</p>
            <p> by {data.author.userName}</p>
            <p>Class: {data.class}</p>
            <p>Are you sure to delete above homework ?</p>
            <div className='flex justify-center pt-10'>
                <ButtonUi type='submit' label='Delete' onClick={() => handleDelete(data._id)} isLoading={isLoading} />
            </div>

        </div>
    )
}

export default DeleteHW