import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string()
        .required("Please enter password")
});