import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
    return (
        <div className='w-full flex justify-between p-2'>
            <p>Home Works</p>
            <Button className='h-7 text-sm'>Login</Button>
        </div>
    )
}

export default Header