import React from 'react'
import { HomeworkInterface } from '@/utils/interfaces';
import { useFormik } from 'formik';
import InputField from './form/InputField';
import SelectField from './form/SelectField';
import { classRoom, sections, subjects } from '@/utils/data';
import ButtonUi from './form/ButtonCom';

function EditHW(props: { data: HomeworkInterface }) {
    const { data } = props;
    const initialValues = {
        heading: data.heading,
        description: data.description,
        class: data.class,
        section: data.section,
        subject: data.subject,
    }
    const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        // validationSchema: loginSchema,
        onSubmit: (values) => {
            // handleLoginApi(values);
        }
    })

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='p-4 border rounded-md shadow bg-slate-100'>
                <InputField name='heading' type='text' label1='Heading' value={values.heading} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Heading'} error1={touched.heading && errors.heading ? errors.heading : ''} />
                <InputField name='description' type='text' label1='Description' value={values.description} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Description'} error1={touched.description && errors.description ? errors.description : ''} />
                <InputField name='description' type='text' label1='Description' value={values.description} onChange={handleChange} onBlur={handleBlur} placeholder={'HomeWork Description'} error1={touched.description && errors.description ? errors.description : ''} />
                <div className='flex flex-wrap w-full gap-0.5 md:gap-2 lg;gap-4'>
                    <SelectField name='class' onChange={setFieldValue} label='Class' value={values.class} menuData={classRoom} width={'w-28'} />
                    <SelectField name='section' onChange={setFieldValue} label='Section' value={values.section} menuData={sections} width={'w-44'} />
                    <SelectField name='subject' onChange={setFieldValue} label='Subject' value={values.subject} menuData={subjects} width={'w-44'} />
                </div>
                <div className='flex justify-center gap-2 pt-10'>
                    <ButtonUi type='submit' label='Submit' />
                </div>
            </form>

        </div>
    )
}

export default EditHW