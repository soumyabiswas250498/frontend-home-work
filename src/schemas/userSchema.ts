import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string()
        .required("Please enter password")
});


export const HwValidationSchema = Yup.object().shape({
    heading: Yup.string()
        .required('Heading is required')
        .min(3, 'Heading must be at least 3 characters'),
    description: Yup.string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters'),
    class: Yup.string()
        .required('Class is required'),
    section: Yup.string()
        .required('Section is required'),
    subject: Yup.string()
        .required('Subject is required'),

    file: Yup.mixed()
        .required('File is required')
        // @ts-ignore
        .test('fileSize', 'File size must be less than 10 MB', value => value && value.size <= 10 * 1024 * 1024)
        // @ts-ignore
        .test('fileType', 'Only png, jpg, jpeg, pdf file supported', value => value && ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(value.type)),
});