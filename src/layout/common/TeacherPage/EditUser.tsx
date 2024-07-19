import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import InputField from '../form/InputField';
import ButtonUi from '../form/ButtonCom';
import { userSchema } from '@/schemas/userSchema';
import { useEditUserMutation } from '@/redux/apiSlice';
import { toast } from 'sonner';

function EditUser({ modalData, setIsOpen, refetch }: { modalData: any, setIsOpen: any, refetch: any }) {

    const [editUser, { isSuccess, error, isError, isLoading }] = useEditUserMutation();

    const initialValues = {
        userName: modalData?.data?.userName,
        email: modalData?.data?.email,
        password: false
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('User Edited Successfully');
            setIsOpen(false);
            refetch();
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            // @ts-ignore
            toast.warning(`Update Failed! ${error?.data?.message}`);
        }
    }, [isError]);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues,
        validationSchema: userSchema,
        onSubmit: (values) => {
            editUser({ id: modalData?.data?._id, editData: values });
        }
    });

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='p-4 border rounded-md shadow bg-slate-100'>
                <InputField name='userName' type='text' label1='Full Name' value={values.userName} onChange={handleChange} onBlur={handleBlur} placeholder={''} error1={(touched.userName && errors.userName) ? errors.userName as string : ''} />
                <InputField name='email' type='email' label1='Email Id' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder={'abc@gmail.com'} error1={touched.email && errors.email ? errors.email as string : ''} />

                <div className="mt-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="password"
                            checked={values.password}
                            onChange={(e) => setFieldValue('password', e.target.checked)}
                            className="form-checkbox"
                        />
                        <span className="ml-2">Change Password</span>
                    </label>
                </div>

                <div className='flex justify-center gap-2 pt-5'>
                    <ButtonUi type='submit' label='Submit' isLoading={isLoading} />
                </div>
            </form>
        </div>
    );
}

export default EditUser;
