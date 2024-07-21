import { lazy, Suspense } from 'react';
import HwSection from './common/HomeWork/HwSection';
import Header from './common/Header';
import ButtonUi from './common/form/ButtonCom';
import Modal from './common/Modal';
import { useState } from 'react';
import Loader from './common/Loader';

const AddHW = lazy(() => import('./common/HomeWork/AddHW'))


function HwDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActionSuccess, setIsActionSuccess] = useState()



    return (
        <div className='w-full'>

            <Header />
            <div className='flex items-center justify-center w-full my-2'>
                <ButtonUi type='button' label='Add Homework' onClick={() => setIsOpen(true)} />
            </div>

            <HwSection isDashboard={true} isActionSuccess={isActionSuccess} />

            {
                isOpen &&
                <Modal open={isOpen} setIsOpen={setIsOpen} title={'Add Homework'}>
                    <Suspense fallback={<Loader />}>
                        <AddHW setIsOpen={setIsOpen} setIsActionSuccess={setIsActionSuccess} />
                    </Suspense>

                </Modal>
            }
        </div>

    )
}

export default HwDashboard