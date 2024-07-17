import React, { useEffect } from 'react'
import { HomeworkInterface } from '@/utils/interfaces';
import { useFormik } from 'formik';
import InputField from '../form/InputField';
import SelectField from '../form/SelectField';
import { classRoom, sections, subjects } from '@/utils/data';
import ButtonUi from '../form/ButtonCom';
import { useEditHomeworkMutation } from '@/redux/apiSlice';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { base_url } from '@/utils/constant';
import { FileDown } from 'lucide-react';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function EditHW(props: { data: HomeworkInterface, refetch: any, setIsOpen: any }) {
    const { data, refetch, setIsOpen } = props;
    const [editHomework, { isSuccess, error, isLoading }] = useEditHomeworkMutation();
    const initialValues = {
        heading: data.heading,
        description: data.description,
        class: data.class,
        section: data.section,
        subject: data.subject,
        file: null,
    }
    const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        // validationSchema: loginSchema,
        onSubmit: (values) => {

            const formData = new FormData();
            formData.append('heading', values.heading);
            formData.append('description', values.description);
            formData.append('classroom', values.class);
            formData.append('section', values.section);
            formData.append('subject', values.subject);
            if (values.file) {
                formData.append('file', values.file);
            }
            editHomework({ id: data._id, editData: formData })
        }
    })

    useEffect(() => {
        if (isSuccess) {
            refetch();
            toast.success('Edited successfully');
            setIsOpen(false)
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            // @ts-ignore
            toast.warning(`Operation Failed! ${error?.data?.message}`)
        }
    }, [error])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
        if (file?.type === 'image/png' || file?.type === 'image/jpg' || file?.type === 'image/jpeg' || file?.type === 'application/pdf') {
            if (file?.size < 10012288) {
                setFieldValue('file', file);
            } else {
                toast.error('File size must be less than 10 MB')
            }

        } else {
            toast.error('Only png, jpg, jpeg, pdf file supported');
        }

    };

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='p-4 border rounded-md shadow bg-slate-100'>
                <InputField name='heading' type='text' label1='Heading' value={values.heading} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Heading'} error1={touched.heading && errors.heading ? errors.heading : ''} />
                <InputField name='description' type='text' label1='Description' value={values.description} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Description'} error1={touched.description && errors.description ? errors.description : ''} />
                <div className='flex flex-wrap w-full gap-0.5 md:gap-2 lg;gap-4'>
                    <SelectField name='class' onChange={setFieldValue} label='Class' value={values.class} menuData={classRoom} width={'w-28'} />
                    <SelectField name='section' onChange={setFieldValue} label='Section' value={values.section} menuData={sections} width={'w-44'} />
                    <SelectField name='subject' onChange={setFieldValue} label='Subject' value={values.subject} menuData={subjects} width={'w-44'} />
                </div>
                <div className="w-full gap-1 pt-2 ">
                    <Label>Document</Label>
                    <div className='flex flex-wrap items-center w-full gap-4'>
                        <Link to={`${base_url}/homework/download/${data.file}`} className='flex gap-1 text-blue-500 cursor-pointer'
                        >
                            <FileDown /> Download
                        </Link>

                        <Input id="file" type="file" className='w-64' onChange={handleFileChange} name='file' />
                    </div>

                </div>

                <div className='flex justify-center gap-2 pt-10'>
                    <ButtonUi type='submit' label='Submit' isLoading={isLoading} />
                </div>
            </form>

        </div>
    )
}

export default EditHW