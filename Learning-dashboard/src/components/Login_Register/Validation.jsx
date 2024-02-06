import * as Yup from 'yup'

export const Validation = Yup.object({
    username: Yup.string().min(3).required("Enter User Name"),
    first_name: Yup.string().min(3).required("Enter FIrst Name"),
    last_name: Yup.string().min(3).required("Enter Last Name"),
    email: Yup.string().email("Please enter valid email Address").required("Email is Required"),
    password: Yup.string().min(5).required("Please enter password"),
    // cpassword: Yup.string().oneOf([Yup.ref("password")], "password not Match").required("Please enter confirm password")
})
