import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import LoginSlice from '../../reducers/LoginReducer';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [loading,setLoading] = useState(false)
    const [loginFail, setLoginFail] = useState(false)

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)

        try{
            const res = await axios.post('https://mw.bethel.network/auth/login' , 
                {
                    email:email,
                    password: password,
                },
                {
                    withCredentials:true,
                })

                if(res.status === 200){
                    dispatch(LoginSlice.actions.saveUser(res.data))
                    setLoading(false)
                    Navigate('/home')
                }else{
                    setLoginFail(true)
                }
                console.log(res)
        }catch(error){
            console.log(error)
            setLoading(false)
            setLoginFail(true)

            setTimeout(() => {
                setLoginFail(false)
            },1000)
        }

    }

  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
            {/* form start  */}
            <div className='flex flex-col items-center rounded-md bg-blue bg-opacity-50 w-[400px] h-[400px] min-[320px]:mx-2'>
                {/* welcome start  */}
                <div className='flex py-8'>
                    <h1 className='font-filson text-[30px] text-white'>Login</h1>
                </div>
                {/* welcome end  */}

                {/* form-content start  */}
                <form className='py-2'>
                    <div>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email Address' className='flex pl-2 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                    </div>
                    <div>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className='flex items-center justify-center pl-2 mt-8 py-2 bg-blue rounded-lg text-white w-full text-[14px] font-filson'>
                            {!loading && <h3>SIGN IN</h3>} {loading && <Link path="/home"><h3>SIGN IN</h3></Link>}
                        </button>

                        { loginFail && <div>

                        <h3 className='p-2 text-sm text-center text-red-700'>Invalid Email or Password</h3>

                        </div> }
                    </div>
                </form>

                {/* form-content end  */}

                {/* create-account start  */}
                <div className='pt-8'>
                    <div>
                        <p className='flex font-filson text-[13px] text-white'>Don't have an account? <span className='pl-1 cursor-pointer'>Create an Account</span></p><br/>
                    </div>
                    <div>
                        <Link to="/register"><span className='flex items-center justify-center text-[16px] text-blue cursor-pointer mt-[-15px]'>Register</span></Link>
                    </div>

                    <div className='text-center mt-1 text-[10px] text-white'>
                        <h3>Version 1.0.1.1</h3>
                    </div>
                    
                </div>
                {/* create-account end  */}

            
            </div>
            {/* form end  */}


      
    </div>
  )
}

export default Login
