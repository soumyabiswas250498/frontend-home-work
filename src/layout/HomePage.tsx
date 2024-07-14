import React, { useState } from 'react'
import { useAllHWQuery } from '@/redux/apiSlice';
import { HomeworkInterface } from '../utils/interfaces.ts';
import Header from './common/Header';
import CardHw from './common/homepage/CardHw.tsx';
import FilterHW from './common/homepage/FilterHW.tsx';
import useMenuMaker from '@/Hooks/useMenuMaker.ts';

function HomePage() {

    const [classRoom, setClassRoom] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const { data, error, isLoading } = useAllHWQuery({ subject: subject, classRoom: classRoom, authorId: teacher });
    const filterMenus = useMenuMaker(data?.data);
    return (
        <div className='w-full '>
            <Header />
            {
                isLoading ?
                    <p>loading...</p>
                    :
                    <div className='w-full'>
                        <FilterHW classRoom={classRoom} subject={subject} teacher={teacher} setClassRoom={setClassRoom} setSubject={setSubject} setTeacher={setTeacher} filterMenus={filterMenus} />
                        {
                            data?.data?.map((item: HomeworkInterface) => <CardHw data={item} key={item._id} />)
                        }
                    </div>
            }
        </div>
    )
}

export default HomePage