import React from 'react';
import { HomeworkInterface } from '@/utils/interfaces';

function CardHw({ data }: { data: HomeworkInterface }) {


    return (
        <div className='w-full '>
            <div className='hidden p-2 flex-col rounded md:flex gap-1 bg-slate-100 shadow-md my-3 mx-2 text-sm'>
                <div className='flex gap-2 justify-between'>
                    <div className='w-2/3 truncate font-semibold'>{data.heading}</div>
                    <div className='w-1/3 truncate' >By - {data.author.userName}</div>
                </div>
                <div className=' flex gap-2 justify-between'>
                    <div className='flex justify-center gap-4'>
                        <div className=''>Class: {data.class}</div>
                        <div>Section: {data.section}</div>
                        <div>Subject: {data.subject}</div>
                    </div>
                    <div>Download</div>
                </div>
            </div>
            <div className='md:hidden p-2 flex-col rounded flex gap-1 bg-slate-200 shadow-md my-3 mx-1 text-sm'>
                <div className='w-full truncate font-semibold'>{data.heading}</div>
                <div className='w-full truncate' >By - {data.author.userName}</div>
                <div className=' flex gap-2 justify-between'>
                    <div className=''>Class: {data.class}</div>
                    <div>Section: {data.section}</div>
                    <div>Subject: {data.subject}</div>
                    <div>Download</div>
                </div>
            </div>

            {/* <div>{data.file}</div> */}
        </div>

    )
}

export default CardHw