import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom";
import useUserData from '@/Hooks/useUserData';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Header() {
    const { userData, isAdmin } = useUserData()
    return (
        <div className='flex justify-between w-full p-2'>
            <div className='flex'>
                <p className='text-2xl font-bold'>Home Works</p>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu className='text-2xl md:hidden' />
                </SheetTrigger>
                <SheetContent className='bg-slate-100'>
                    <div className='flex flex-col gap-8 '>
                        {
                            isAdmin && <Link to={'/dashboard/teachers'} className='w-fit'><Button className='w-32'>Teachers</Button></Link>
                        }
                        {
                            userData && <Link to={'/dashboard'} className='w-fit'><Button className='w-32'>Home Works</Button></Link>
                        }
                        {
                            userData ? <Button className=''>Logout</Button> : <Link to={'/login'}>
                                <Button className=''>Login</Button>
                            </Link>
                        }
                    </div>
                </SheetContent>
            </Sheet>


            <div className='hidden gap-8 md:flex'>
                {
                    isAdmin && <Link to={'/dashboard/teachers'}><Button>Teachers</Button></Link>
                }
                {
                    userData && <Link to={'/dashboard'}><Button>Home Works</Button></Link>
                }
                {
                    userData ? <Button className=''>Logout</Button> : <Link to={'/login'}>
                        <Button className=''>Login</Button>
                    </Link>
                }
            </div>



        </div>
    )
}

export default Header