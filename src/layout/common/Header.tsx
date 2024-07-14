import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom";
import useUserData from '@/Hooks/useUserData';

function Header() {
    const { userData, isAdmin } = useUserData()
    return (
        <div className='flex justify-between w-full p-2'>
            <p>Home Works</p>


            {
                userData ? <Button className='text-sm h-7'>Logout</Button> : <Link to={'/login'}>
                    <Button className='text-sm h-7'>Login</Button>
                </Link>
            }

        </div>
    )
}

export default Header