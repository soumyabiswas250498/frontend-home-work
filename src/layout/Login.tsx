import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginApiMutation } from '@/redux/apiSlice';
import { useFormik } from "formik";
import { loginSchema } from '@/schemas/userSchema';
import InputField from './common/form/InputField';
import ButtonUi from './common/form/ButtonCom';
import { toast } from 'sonner';


function Login() {
    const navigate = useNavigate();
    const [handleLoginApi, { isLoading, data, isSuccess, error }] = useLoginApiMutation();

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
            localStorage.setItem('username', data?.data.userName);
            localStorage.setItem('email', data?.data.email);
            localStorage.setItem('role', data?.data.role)
            navigate('/dashboard');
        }
    }, [data?.success])


    return (
        <div className='w-full h-screen flex justify-center items-center'>

            <form onSubmit={handleSubmit} className='w-1/3 min-w-[300px] h-fit border p-4 rounded-md shadow bg-slate-100'>
                <div className='w-full flex justify-center text-xl text-slate-600 font-bold'> Login </div>
                <InputField name='email' type='email' label1='Email ID' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={'abc@gmail.com'} error1={touched.email && errors.email ? errors.email : ''} />
                <InputField name='password' type='password' label1='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder={'****'} error1={touched.password && errors.password ? errors.password : ''} />
                <div className='pt-2 w-full flex items-center justify-center'>
                    <ButtonUi type='submit' label='Login' isLoading={isLoading} onClick={() => handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Login