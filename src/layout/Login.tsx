import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginApiMutation } from '@/redux/apiSlice';
import { useFormik } from "formik";
import { loginSchema } from '@/schemas/userSchema';
import InputField from './common/form/InputField';
import ButtonUi from './common/form/ButtonCom';
import { toast } from 'sonner';
import useLocalStorage from '@/Hooks/useLocalStorage';


function Login() {
    const navigate = useNavigate();
    const [handleLoginApi, { isLoading, data, isSuccess, error }] = useLoginApiMutation();
    const { saveToLocalStorage } = useLocalStorage()

    useEffect(() => {
        if (error) {
            toast.error("Invalid Credentials");
        }
        console.log(error)
    }, [error])

    const initialValues = {
        email: "",
        password: ""
    }
    const { values, errors, touched, handleBlur, handleChange, resetForm, handleSubmit } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            handleLoginApi(values);
        }
    })

    useEffect(() => {
        if (data?.success) {
            resetForm();
            toast.success('Logged in successfully');
            saveToLocalStorage({ 'username': data?.data.userName, 'email': data?.data.email, 'role': data?.data.role }, 'userData');
            navigate('/dashboard');
        }
    }, [data?.success])


    return (
        <div className='flex items-center justify-center w-full h-screen'>

            <form onSubmit={handleSubmit} className='w-1/3 min-w-[300px] h-fit border p-4 rounded-md shadow bg-slate-100'>
                <div className='flex justify-center w-full text-xl font-bold text-slate-600'> Login </div>
                <InputField name='email' type='email' label1='Email ID' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={'abc@gmail.com'} error1={touched.email && errors.email ? errors.email : ''} />
                <InputField name='password' type='password' label1='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder={'**** ****'} error1={touched.password && errors.password ? errors.password : ''} />
                <div className='flex items-center justify-center w-full pt-2'>
                    <ButtonUi type='submit' label='Login' isLoading={isLoading} onClick={() => handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Login