import useMenuMaker from '@/Hooks/useMenuMaker';
import { useAllHWQuery } from '@/redux/apiSlice';
import React, { useEffect, useState } from 'react'
import FilterHW from '../homepage/FilterHW';
import CardHw from '../homepage/CardHw';
import { HomeworkInterface } from '@/utils/interfaces';
import { LoaderCircle } from 'lucide-react';
import Modal from '../Modal';
import EditHW from './EditHW';
import DeleteHW from './DeleteHW';

function HwSection({ isDashboard, isActionSuccess }: { isDashboard?: boolean, isActionSuccess?: any }) {
    const [classRoom, setClassRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const { data, error, isLoading, refetch } = useAllHWQuery({ subject: subject, classRoom: classRoom, authorId: teacher });
    const filterMenus = useMenuMaker(data?.data);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData]: any = useState({ title: 'Edit', data: {} });


    useEffect(() => {
        if (isActionSuccess) {
            refetch()
        }
    }, [isActionSuccess])


    return (
        <div className='w-full'>
            {isLoading ?
                <div className='w-full h-[80vh] flex justify-center items-center'>
                    <LoaderCircle />
                </div>
                :
                <div className='w-full'>
                    <FilterHW classRoom={classRoom} subject={subject} teacher={teacher} setClassRoom={setClassRoom} setSubject={setSubject} setTeacher={setTeacher} filterMenus={filterMenus} />
                    {
                        data?.data?.map((item: HomeworkInterface) => <CardHw data={item} key={item._id} setModalOpen={setIsOpen} setModalData={setModalData} isDashboard={isDashboard} />)
                    }
                </div>}

            <Modal open={isOpen} setIsOpen={setIsOpen} title={modalData.title}>
                {
                    modalData.title === 'Edit' && <EditHW data={modalData.data} refetch={refetch} setIsOpen={setIsOpen} />
                }
                {
                    modalData.title === 'Delete' && <DeleteHW data={modalData.data} refetch={refetch} setIsOpen={setIsOpen} />
                }
            </Modal>
        </div>

    )
}

export default HwSection