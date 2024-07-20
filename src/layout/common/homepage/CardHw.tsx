import React from 'react';
import { HomeworkInterface } from '@/utils/interfaces';
import useUserData from '@/Hooks/useUserData';
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { base_url } from '@/utils/constant';
import { FileDown } from 'lucide-react';
import { convertToIndianFormat } from '@/utils/commonFunction';



function CardHw({ data, setModalData, setModalOpen, isDashboard, userData, isAdmin }: { data: HomeworkInterface, setModalData?: any, setModalOpen?: any, isDashboard?: boolean, userData: any, isAdmin: any }) {


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
                        <div className='capitalize'>Section: {data.section}</div>
                        <div>Subject: {data.subject}</div>

                    </div>

                    <div className='flex items-center justify-center gap-2 '>
                        <div className='px-2 bg-purple-200 rounded'>
                            Created At: {convertToIndianFormat(data.createdAt)}
                        </div>

                        {data.createdAt !== data.updatedAt &&
                            <div className='px-2 bg-purple-200 rounded'>
                                Last Updated At: {convertToIndianFormat(data.updatedAt)}
                            </div>
                        }
                    </div>
                    <div className='flex gap-4'>
                        <Link to={`/homeworks/detail/${data._id}`} className='p-1 text-white rounded cursor-pointer bg-slate-800'>
                            Details
                        </Link>

                        <Link to={`https://files.pmgsv.in/uploads/hw-pmgsv-in/${data.file}`} target="_blank" className='text-blue-500 cursor-pointer '
                        >
                            <FileDown />
                        </Link>
                    </div>


                </div>
            </div>
            <div className='flex flex-col gap-1 p-2 mx-1 my-3 text-sm rounded shadow-md md:hidden bg-slate-200'>
                <div className='w-full font-semibold truncate'>{data.heading}</div>
                <div className='w-full truncate'>By - {data.author.userName}</div>
                <div className='w-full'>

                </div>
                <div className='flex justify-between gap-2 '>
                    <div className=''>Class: {data.class}</div>
                    <div className='capitalize'>Section: {data.section}</div>
                    <div>Subject: {data.subject}</div>
                    <Link to={`https://files.pmgsv.in/uploads/hw-pmgsv-in/${data.file}`} target="_blank" className='text-blue-500 cursor-pointer '
                    >
                        <FileDown />
                    </Link>
                </div>

                <div className='flex items-center justify-between'>

                    <Link to={`/homeworks/detail/${data._id}`} className='p-1 text-white rounded cursor-pointer bg-slate-800'>
                        Details
                    </Link>

                    <div className='flex flex-col items-end justify-end gap-1 text-xs'>
                        <div className='px-2 bg-purple-200 rounded'>
                            Created : {convertToIndianFormat(data.createdAt)}
                        </div>

                        {data.createdAt !== data.updatedAt &&
                            <div className='px-2 bg-purple-200 rounded'>
                                Updated : {convertToIndianFormat(data.updatedAt)}
                            </div>
                        }
                    </div>

                </div>


            </div>

            {/* <div>{data.file}</div> */}
            {
                isDashboard && <div className='absolute flex justify-center items-center md:gap-4 gap-10 top-[-5px] z-10 right-10'>
                    {
                        (userData.email === data.author.email || isAdmin) && <Pencil className='text-blue-500 cursor-pointer' size={18} onClick={() => { setModalOpen(true); setModalData({ title: 'Edit', data: data }) }} />
                    }
                    {
                        isAdmin && <Trash2 className='text-red-500 cursor-pointer' onClick={() => { setModalOpen(true); setModalData({ title: 'Delete', data: data }) }} size={18} />
                    }


                </div>

            }
        </div>

    )
}

export default CardHw