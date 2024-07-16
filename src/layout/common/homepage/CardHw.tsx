import React from 'react';
import { HomeworkInterface } from '@/utils/interfaces';
import useUserData from '@/Hooks/useUserData';
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';




function CardHw({ data, setModalData, setModalOpen }: { data: HomeworkInterface, setModalData?: any, setModalOpen?: any }) {

    const { userData, isAdmin } = useUserData()

    // console.log(data)
    return (
        <div className='relative w-full'>
            <div className='flex-col hidden gap-1 p-2 mx-2 my-3 text-sm rounded shadow-md md:flex bg-slate-100'>
                <div className='flex justify-between gap-2'>
                    <div className='w-2/3 font-semibold truncate'>{data.heading}</div>
                    <div className='w-1/3 truncate' >By - {data.author.userName}</div>
                </div>
                <div className='flex justify-between gap-2 '>
                    <div className='flex justify-center gap-4'>
                        <div className=''>Class: {data.class}</div>
                        <div>Section: {data.section}</div>
                        <div>Subject: {data.subject}</div>
                    </div>
                    <div>Download</div>
                </div>
            </div>
            <div className='flex flex-col gap-1 p-2 mx-1 my-3 text-sm rounded shadow-md md:hidden bg-slate-200'>
                <div className='w-full font-semibold truncate'>{data.heading}</div>
                <div className='w-full truncate'>By - {data.author.userName}</div>
                <div className='w-full'>

                </div>
                <div className='flex justify-between gap-2 '>
                    <div className=''>Class: {data.class}</div>
                    <div>Section: {data.section}</div>
                    <div>Subject: {data.subject}</div>
                    <div>Download</div>
                </div>
            </div>

            {/* <div>{data.file}</div> */}
            <div className='absolute flex justify-center items-center md:gap-4 gap-10 top-[-5px] z-10 right-10'>
                {
                    userData && <Pencil className='text-blue-500 cursor-pointer' size={18} onClick={() => { setModalOpen(true); setModalData({ title: 'Edit', data: data }) }} />
                }
                {
                    isAdmin && <Trash2 className='text-red-500 cursor-pointer' onClick={() => { setModalOpen(true); setModalData({ title: 'Delete', data: data }) }} size={18} />
                }


            </div>
        </div>

    )
}

export default CardHw