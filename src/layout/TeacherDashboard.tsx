import React, { useState } from 'react'
import Header from './common/Header';
import AllTeacher from './common/TeacherPage/AllTeacher';
import ButtonUi from './common/form/ButtonCom';
import Modal from './common/Modal';
import AddUser from './common/TeacherPage/AddUser';

function TeacherDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActionSuccess, setIsActionSuccess] = useState()
    return (
        <div className='w-full'>
            <Header />
            <div className='flex items-center justify-center w-full'>
                <ButtonUi type='button' label='Add Tacher' onClick={() => setIsOpen(true)} />
            </div>
            <AllTeacher isActionSuccess={isActionSuccess} />


            {
                isOpen &&
                <Modal open={isOpen} setIsOpen={setIsOpen} title={'Add Homework'}>
                    <AddUser setIsOpen={setIsOpen} setIsActionSuccess={setIsActionSuccess} />
                </Modal>
            }

        </div>
    )
}

export default TeacherDashboard