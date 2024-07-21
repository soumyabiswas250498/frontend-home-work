import React, { useEffect, useState } from 'react';
import { useAllUsersQuery } from '@/redux/apiSlice';
import Loader from '../Loader';
import { UserInt } from '@/utils/interfaces';
import Modal from '../Modal';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { lazy, Suspense } from 'react';
import Loader2 from '../Loader2';

const TeacherCard = lazy(() => import('./TeacherCard'))




function AllTeacher({ isActionSuccess }: { isActionSuccess: any }) {
    const { isLoading, data, isError, refetch } = useAllUsersQuery({});
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData]: any = useState({ title: 'Edit', data: {} });
    const users = data?.data?.users;

    useEffect(() => {
        if (isActionSuccess) {
            refetch()
        }
    }, [isActionSuccess])

    return (
        <div className='w-full'>
            {
                isLoading ? <div className='w-full h-[80vh] flex justify-center items-center'>
                    <Loader />
                </div>
                    :

                    <div className='w-full'>
                        {
                            users?.length ?
                                <div className='grid w-full grid-cols-1 lg:grid-cols-3'>
                                    {users.map(
                                        (item: UserInt) => <Suspense key={item._id} fallback={<Loader2 />}>
                                            <TeacherCard user={item} setIsOpen={setIsOpen} setModalData={setModalData} />
                                        </Suspense>

                                    )}
                                </div>

                                :
                                <div className='flex w-full h-[80vh] justify-center items-center'>
                                    <p>No data found</p>
                                </div>

                        }
                    </div>

            }

            <Modal open={isOpen} setIsOpen={setIsOpen} title={modalData.title}>
                {
                    modalData.title === 'Edit' && <EditUser modalData={modalData} setIsOpen={setIsOpen} refetch={refetch} />
                }
                {
                    modalData.title === 'Delete' && <DeleteUser modalData={modalData} setIsOpen={setIsOpen} refetch={refetch} />
                }
            </Modal>

        </div >
    )
}

export default AllTeacher