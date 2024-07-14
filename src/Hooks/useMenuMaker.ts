/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { HomeworkInterface } from "@/utils/interfaces";

const useMenuMaker = (data: [HomeworkInterface]) => {
    const [teacherMenu, setTeacherMenu]: any = useState([]);
    const [classMenu, setClassMenu]: any = useState([])
    const [subjectMenu, setSubjectMenu]: any = useState([])

    const menuTeacherTemp: any = {}
    const menuClassTemp: any = {}
    const menuSubjectTemp: any = {}

    data?.length && data.forEach((item) => {
        menuTeacherTemp[item.author._id] = item.author.userName;
        menuClassTemp[item.class] = item.class;
        menuSubjectTemp[item.subject] = item.subject;
    })

    const resultArray = Object.entries(menuTeacherTemp).map(([value, label]) => ({ label, value }));
    const classArray = Object.entries(menuClassTemp).map(([value, label]) => ({ label, value }));
    const subjectArray = Object.entries(menuSubjectTemp).map(([value, label]) => ({ label, value }));

    useEffect(() => {
        if (resultArray?.length) {
            setTeacherMenu(resultArray)
        }
    }, [resultArray?.length]);
    useEffect(() => {
        if (classArray?.length) {
            setClassMenu(classArray)
        }
    }, [classArray?.length])
    useEffect(() => {
        if (subjectArray?.length) {
            setSubjectMenu(subjectArray)
        }
    }, [subjectArray?.length])


    return { teacherMenu, classMenu, subjectMenu }


}

export default useMenuMaker;


