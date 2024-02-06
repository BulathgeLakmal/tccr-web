import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Validation } from './Validation'
import { useFormik } from "formik";
import axios from 'axios';


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
    username: ''
}

const Register = () => {
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Validation,

        onSubmit: async (values) => {
            console.log(values)
            setLoading(true)

            const res = await axios.post('https://mw.bethel.network/auth/register', {
                email: values.email,
                username: values.username,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
            },
                {
                    withCredentials: true

                })

            try {
                res.status === 200 ? Navigate('/') : setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    })

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            {/* form start  */}
            <div className='flex flex-col items-center rounded-md bg-blue bg-opacity-50 w-[400px] h-auto min-[320px]:mx-2'>
                {/* welcome start  */}
                <div className='flex py-8'>
                    <h1 className='font-filson text-[30px] text-white'>Register</h1>
                </div>
                {/* welcome end  */}

                {/* form-content start  */}
                <form onSubmit={handleSubmit} className='py-2'>
                    <div className=''>
                        <input type="text" name="username" value={values.username} placeholder='Username' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.username && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.username}</h4>}
                    </div>
                    <div>
                        <input type="text" name="firstName" value={values.firstName} placeholder='First Name' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.firstName && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.firstName}</h4>}
                    </div>
                    <div>
                        <input type="text" name="lastName" value={values.lastName} placeholder='Last Name' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.lastName && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.lastName}</h4>}
                    </div>
                    <div>
                        <input type="email" name="email" value={values.email} placeholder='Email Address' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.email && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.email}</h4>}
                    </div>
                    <div>
                        <input type="password" name="password" value={values.password} placeholder='Password' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.password && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.password}</h4>}
                    </div>
                    <div>
                        <input type="password" name="cpassword" value={values.cpassword} placeholder='Confirm Password' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {errors.cpassword && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.cpassword}</h4>}
                    </div>

                    <div>
                        <button type='submit' className='flex items-center justify-center pl-2 mt-8 py-2 bg-[#3E065F] rounded-lg text-white w-full text-[14px] font-filson'>
                            {!loading && <h3>SIGN UP</h3>} {loading && <Link to="/"></Link>}
                        </button>
                    </div>
                </form>

                {/* form-content end  */}

                {/* create-account start  */}
                <div className='pt-8'>
                    <div>
                        <p className='flex items-center justify-center font-filson text-[13px] text-white'>Already have an account ?
                            <Link to="/"> <span className='pl-1 cursor-pointer text-[16px] text-blue '>Login</span></Link>
                        </p><br />
                    </div>

                </div>
                {/* create-account end  */}


            </div>
            {/* form end  */}



        </div>
    )
}

export default Register
