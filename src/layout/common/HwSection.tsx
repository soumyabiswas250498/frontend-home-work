import useMenuMaker from '@/Hooks/useMenuMaker';
import { useAllHWQuery } from '@/redux/apiSlice';
import React, { useState } from 'react'
import FilterHW from './homepage/FilterHW';
import CardHw from './homepage/CardHw';
import { HomeworkInterface } from '@/utils/interfaces';
import { LoaderCircle } from 'lucide-react';
import Modal from './Modal';
import EditHW from './EditHW';
import DeleteHW from './DeleteHW';

function HwSection() {
    const [classRoom, setClassRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const { data, error, isLoading } = useAllHWQuery({ subject: subject, classRoom: classRoom, authorId: teacher });
    const filterMenus = useMenuMaker(data?.data);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };
    const [modalData, setModalData]: any = useState({ title: 'Edit', data: {} })
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
                        data?.data?.map((item: HomeworkInterface) => <CardHw data={item} key={item._id} setModalOpen={setIsOpen} setModalData={setModalData} />)
                    }
                </div>}

            <Modal open={isOpen} setIsOpen={setIsOpen} title={modalData.title}>
                {
                    modalData.title === 'Edit' && <EditHW data={modalData.data} />
                }
                {
                    modalData.title === 'Delete' && <DeleteHW data={modalData.data} />
                }
            </Modal>
        </div>

    )
}

export default HwSection