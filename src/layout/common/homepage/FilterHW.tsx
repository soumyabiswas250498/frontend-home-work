import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { X } from 'lucide-react';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { CheckCheck } from 'lucide-react';

import { SlidersHorizontal } from 'lucide-react';


interface ComponentProps {
    teacher: string;
    subject: string;
    classRoom: string;
    setClassRoom: (value: string) => void;
    setSubject: (value: string) => void;
    setTeacher: (value: string) => void;
    filterMenus: any
}

interface menuInt {
    value: string;
    label: string;
}

function FilterHW(props: ComponentProps) {
    const { teacher, subject, classRoom, setClassRoom, setSubject, setTeacher, filterMenus } = props
    const { teacherMenu, classMenu, subjectMenu } = filterMenus;
    return (
        <div className='w-full'>
            <div className='hidden md:flex items-center w-full gap-2 m-2'>
                <Select onValueChange={(data) => { setClassRoom(data) }} value={classRoom}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Class" />
                    </SelectTrigger>
                    <SelectContent>
                        {classMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >Class : {item.label}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select onValueChange={(data) => { setSubject(data) }} value={subject}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        {subjectMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >{item.label}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select onValueChange={(data) => { setTeacher(data) }} value={teacher}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Teacher" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            teacherMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >{item.label}</SelectItem>)
                        }
                    </SelectContent>
                </Select>

                {(teacher || subject || classRoom) && <X className='text-red-500 cursor-pointer' onClick={() => { setClassRoom(''); setSubject(''); setTeacher('') }} />}

            </div>

            <div className='md:hidden mx-4'>
                <Drawer>
                    <DrawerTrigger>
                        <SlidersHorizontal className='text-blue-500' />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Filters</DrawerTitle>
                            <DrawerDescription>
                                <div className='flex flex-col items-center w-full gap-2 m-2'>
                                    <Select onValueChange={(data) => { setClassRoom(data) }} value={classRoom}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {classMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >Class : {item.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <Select onValueChange={(data) => { setSubject(data) }} value={subject}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjectMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >{item.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <Select onValueChange={(data) => { setTeacher(data) }} value={teacher}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Teacher" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                teacherMenu.map((item: menuInt) => <SelectItem value={item.value} key={item.value} >{item.label}</SelectItem>)
                                            }
                                        </SelectContent>
                                    </Select>



                                </div>
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose className='w-full flex gap-10 justify-center'>
                                <div className=' p-2 rounded-md border border-green-500'>
                                    <CheckCheck className='text-green-500 ' />
                                </div>

                                {(teacher || subject || classRoom) &&
                                    <div className=' p-2 rounded-md border border-red-500' >
                                        <X className='text-red-500 cursor-pointer'
                                            onClick={() => { setClassRoom(''); setSubject(''); setTeacher('') }}
                                        />
                                    </div>
                                }
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>
        </div>
    )
}

export default FilterHW