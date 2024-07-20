import React, { useEffect } from 'react'
import ButtonUi from '../form/ButtonCom';
import { useDeleteUserMutation } from '@/redux/apiSlice';
import { toast } from 'sonner';

function DeleteUser({ modalData, setIsOpen, refetch }: { modalData: any, setIsOpen: any, refetch: any }) {
    console.log(modalData)
    const [deleteUserFunc, { isSuccess, error, isLoading }] = useDeleteUserMutation();

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

    const handleDelete = () => {
        deleteUserFunc(modalData?.data?._id)
    }

    return (
        <div className='w-full p-2 text-sm bg-red-100 rounded shadow-md text-blue-950 md:text-base'>
            <p>Full Name: {modalData?.data?.userName}</p>
            <p>Email: {modalData?.data?.email}</p>
            <p>Are you sure to delete above teacher ?</p>
            <div className='flex justify-center pt-10'>
                <ButtonUi type='submit' label='Delete' onClick={() => { handleDelete() }} isLoading={isLoading} />
            </div>

        </div>
    )
}

export default DeleteUser