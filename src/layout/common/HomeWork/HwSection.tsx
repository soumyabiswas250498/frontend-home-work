import useMenuMaker from '@/Hooks/useMenuMaker';
import { useAllHWQuery } from '@/redux/apiSlice';
import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react'
import FilterHW from '../homepage/FilterHW';
import { HomeworkInterface } from '@/utils/interfaces';
import Loader from '../Loader';
import Modal from '../Modal';
import useUserData from '@/Hooks/useUserData';
import Loader2 from '../Loader2';

const EditHW = lazy(() => import('./EditHW'));
const DeleteHW = lazy(() => import('./DeleteHW'));
const CardHw = lazy(() => import('../homepage/CardHw'));



function HwSection({ isDashboard, isActionSuccess }: { isDashboard?: boolean, isActionSuccess?: any }) {
    const [classRoom, setClassRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const { data, error, isLoading, refetch } = useAllHWQuery({ subject: subject, classRoom: classRoom, authorId: teacher });
    const filterMenus = useMenuMaker(data?.data);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData]: any = useState({ title: 'Edit', data: {} });
    const { userData, isAdmin } = useUserData();


    useEffect(() => {
        if (isActionSuccess) {
            refetch()
        }
    }, [isActionSuccess])


    return (
        <div className='w-full'>
            {isLoading ?
                <div className='w-full h-[80vh] flex justify-center items-center'>
                    <Loader />
                </div>
                :
                <div className='w-full'>
                    <FilterHW classRoom={classRoom} subject={subject} teacher={teacher} setClassRoom={setClassRoom} setSubject={setSubject} setTeacher={setTeacher} filterMenus={filterMenus} />
                    {
                        data?.data?.map((item: HomeworkInterface) => <Suspense key={item._id} fallback={<Loader2 />} >
                            <CardHw data={item} key={item._id} setModalOpen={setIsOpen} setModalData={setModalData} isDashboard={isDashboard} userData={userData} isAdmin={isAdmin} />
                        </Suspense>)
                    }
                </div>}

            <Modal open={isOpen} setIsOpen={setIsOpen} title={modalData.title}>
                {
                    modalData.title === 'Edit' && <Suspense fallback={<Loader />}>
                        <EditHW data={modalData.data} refetch={refetch} setIsOpen={setIsOpen} />
                    </Suspense>
                }
                {
                    modalData.title === 'Delete' && <Suspense fallback={<Loader />}>
                        <DeleteHW data={modalData.data} refetch={refetch} setIsOpen={setIsOpen} />
                    </Suspense>
                }
            </Modal>
        </div>

    )
}

export default HwSection