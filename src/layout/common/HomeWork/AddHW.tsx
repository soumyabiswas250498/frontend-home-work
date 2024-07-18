import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { classRoom, sections, subjects } from '@/utils/data';
import InputField from '../form/InputField';
import SelectField from '../form/SelectField';
import ButtonUi from '../form/ButtonCom';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from 'sonner';
import { HwValidationSchema } from '@/schemas/userSchema';
import { useAddHomeworkMutation } from '@/redux/apiSlice';




function AddHW({ setIsOpen, setIsActionSuccess }: { setIsOpen: any, setIsActionSuccess: any }) {
    const [addData, { isError, isLoading, isSuccess, data, error }] = useAddHomeworkMutation()
    const initialValues = {
        heading: '',
        description: '',
        class: '',
        section: '',
        subject: '',
        file: null,
    }
    const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: HwValidationSchema,
        onSubmit: (values) => {
            // handleLoginApi(values);
            const formData = new FormData();
            formData.append('heading', values.heading);
            formData.append('description', values.description);
            formData.append('classroom', values.class);
            formData.append('section', values.section);
            formData.append('subject', values.subject);
            if (values.file) {
                formData.append('file', values.file);
            }
            addData(formData)
        }
    })

    useEffect(() => {
        if (isError) {
            // @ts-ignore
            toast.warning(`Addition Failed! ${error?.data?.message}`)
        }
    }, [isError])


    useEffect(() => {
        if (isSuccess) {
            toast.success('Homework Added Successfully')
            resetForm();
            setIsOpen(false)

        }
        setIsActionSuccess(isSuccess);
    }, [isSuccess])
    // console.log(isSuccess, '***ve')

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
        setFieldValue('file', file);

    };


    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='p-4 border rounded-md shadow bg-slate-100'>
                <InputField name='heading' type='text' label1='Heading' value={values.heading} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Heading'} error1={touched.heading && errors.heading ? errors.heading : ''} />
                <InputField name='description' type='text' label1='Description' value={values.description} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Description'} error1={touched.description && errors.description ? errors.description : ''} />
                <div className='flex flex-wrap w-full gap-0.5 md:gap-2 lg;gap-4'>
                    <SelectField name='class' onChange={setFieldValue} label='Class' onBlur={handleBlur} value={values.class} menuData={classRoom} width={'w-28'} error={touched.class && errors.class ? errors.class : ''} />
                    <SelectField name='section' onChange={setFieldValue} label='Section' value={values.section} menuData={sections} width={'w-44'} error={touched.section && errors.section ? errors.section : ''} />
                    <SelectField name='subject' onChange={setFieldValue} label='Subject' value={values.subject} menuData={subjects} width={'w-44'} error={touched.subject && errors.subject ? errors.subject : ''} />
                </div>
                <div className="w-full gap-1 ">
                    <Label>Document</Label>
                    <div className='flex flex-wrap items-center w-full gap-4'>
                        <Input id="file" type="file" className='w-64' onChange={handleFileChange} name='file' />
                    </div>
                    <p className='pt-1 text-xs text-red-500'>{touched.file && errors.file ? errors.file : ''}&nbsp;</p>

                </div>

                <div className='flex justify-center gap-2 pt-4'>
                    <ButtonUi type='submit' label='Submit' isLoading={isLoading} />
                </div>
            </form>

        </div>
    )
}

export default AddHW