import React, { useState } from 'react'
import { useAllHWQuery } from '@/redux/apiSlice';
import { HomeworkInterface } from '../utils/interfaces.ts';
import Header from './common/Header';
import HwSection from './common/HomeWork/HwSection.tsx';

function HomePage() {


    return (
        <div className='w-full '>
            <Header />
            {

                <HwSection />
            }
        </div>
    )
}

export default HomePage