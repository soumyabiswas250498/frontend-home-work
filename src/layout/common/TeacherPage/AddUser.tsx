import { userSchema } from '@/schemas/userSchema'
import { useFormik } from 'formik'
import InputField from '../form/InputField'
import ButtonUi from '../form/ButtonCom';
import { useAddUserMutation } from '@/redux/apiSlice';
import { useEffect } from 'react';
import { toast } from 'sonner';

function AddUser({ setIsOpen, setIsActionSuccess }: { setIsOpen: any, setIsActionSuccess: any }) {
    const [addData, { isError, isLoading, isSuccess, data, error }] = useAddUserMutation()

    const initialValues = {
        userName: '',
        email: '',
    }

    const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
            console.log(values, '***v')
            addData(values);
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
            toast.success('User Added Successfully')
            resetForm();
            setIsOpen(false)

        }
        setIsActionSuccess(isSuccess);
    }, [isSuccess])



    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='p-4 border rounded-md shadow bg-slate-100'>
                <InputField name='userName' type='text' label1='Full Name' value={values.userName} onChange={handleChange} onBlur={handleBlur} placeholder={''} error1={(touched.userName && errors.userName) ? errors.userName as string : ''} />
                <InputField name='email' type='email' label1='Email Id' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={'abc@gmail.com'} error1={touched.email && errors.email ? errors.email as string : ''} />

                <div className='flex justify-center gap-2 pt-5'>
                    <ButtonUi type='submit' label='Submit' isLoading={isLoading} />
                </div>
            </form>

        </div>
    )
}

export default AddUser