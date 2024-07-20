import React from 'react';
import { UserInt } from '@/utils/interfaces';
import { Pencil, Trash2 } from 'lucide-react';

function TeacherCard({ user, setModalData, setIsOpen }: { user: UserInt; setIsOpen: any, setModalData: any }) {
    return (
        <div className='relative p-2 mx-2 my-2 rounded shadow-md bg-slate-100'>
            <p>Fullname : {user.userName}</p>
            <p>Email Id: {user.email}</p>
            <p>Role: {user.role}</p>
            <div className='absolute flex justify-center items-center md:gap-4 gap-10 top-[-5px] z-10 right-10'>
                {!user.userName.toLowerCase().includes('admin') &&
                    <Pencil className='text-blue-500 cursor-pointer' size={18} onClick={() => { setIsOpen(true); setModalData({ title: 'Edit', data: user }) }} />
                }
                {!user.email.toLowerCase().includes('admin') &&
                    <Trash2 className='text-red-500 cursor-pointer' onClick={() => { setIsOpen(true); setModalData({ title: 'Delete', data: user }) }} size={18} />
                }


            </div>
        </div>
    )
}

export default TeacherCard