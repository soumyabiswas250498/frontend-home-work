import { useHwDetailsQuery } from '@/redux/apiSlice';
import { FileDown, LoaderCircle } from 'lucide-react';
import Header from '../Header';
import { HomeworkInterface } from '@/utils/interfaces';

import { Link, useLocation } from 'react-router-dom';
import { convertToIndianFormat } from '@/utils/commonFunction';


function HwDetails() {
    const location = useLocation();
    const pathArr = location.pathname.split('/')
    const hwId = pathArr[pathArr.length - 1]
    const { data, error, isLoading, isSuccess, refetch } = useHwDetailsQuery(hwId);

    const hwData: HomeworkInterface = data?.data


    if (isLoading) {
        return <div className='w-full'>
            <Header />
            <div className='flex justify-center items-center w-full h-[80vh]'>
                <LoaderCircle />
            </div>
        </div>
    }

    return (

        <div className='w-full'>
            <Header />
            {

                hwData ?
                    <div className='w-full px-2 py-4'>
                        <div className='flex-col w-full gap-4 text-slate-700'>
                            <div className='flex justify-center w-full pb-2'>
                                <p className='text-xl font-bold'>
                                    {hwData.heading}
                                </p>
                            </div>

                            <div className='flex justify-end w-full py-2'>
                                <p>- By {hwData.author.userName}</p>
                            </div>
                            <p className='py-2'>
                                {hwData.description}
                            </p>

                            <Link to={`https://files.pmgsv.in/uploads/hw-pmgsv-in/${hwData.file}`} target='_blank' className='flex gap-2 px-2 py-0.5 rounded text-white bg-blue-500 w-fit my-2'>

                                Download <FileDown />

                            </Link>

                            <div className='flex gap-2 py-2'>
                                <p className='px-2 capitalize border border-dotted rounded bg-slate-100 border-slate-800'>
                                    Class : {hwData.class}
                                </p>
                                <p className='px-2 capitalize border border-dotted rounded bg-slate-100 border-slate-800'>
                                    Section : {hwData.section}
                                </p>
                                <p className='px-2 capitalize border border-dotted rounded bg-slate-100 border-slate-800'>
                                    Subject : {hwData.subject}
                                </p>
                            </div>

                            <div className='flex flex-col gap-2 py-2'>
                                <p className='px-2 bg-purple-200 border border-purple-900 border-dashed rounded w-fit'>
                                    Created At: {convertToIndianFormat(hwData.createdAt)}
                                </p>

                                {hwData.createdAt !== hwData.updatedAt &&
                                    <p className='px-2 bg-purple-200 border border-purple-900 border-dashed rounded w-fit'>
                                        Last Updated At: {convertToIndianFormat(hwData.updatedAt)}
                                    </p>
                                }
                            </div>



                        </div>

                    </div>
                    :
                    <div className='w-full h-[80vh] flex items-center justify-center'>
                        <p className='text-2xl text-slate-400'>Data Not Found</p>
                    </div>
            }
        </div>
    )
}

export default HwDetails