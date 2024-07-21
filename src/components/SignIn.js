import React from 'react'
import { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import { toast } from 'react-hot-toast';

const SignIn = ({setIsLoggedIn}) => {
    const[formData,setFormData] = useState({email:" ",password:""});
    const[showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    function changeHandler(event){
        setFormData( (prevData) => (
            {
            ...prevData,
            [event.target.name]:event.target.value
            }
        ))
        }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard");
    }
    return(
        <div className='w-100vh h-[88vh] bg-gray-200 flex flex-col justify-center items-center'>
            <div className='flex  w-11/12 max-w-[1000px] h-[82vh] flex-row'>
                <div className='bg-blue-600 p-10 w-2/5 relative'>
                <p className='text-bold text-white text-2xl'>Login</p>
                <p className='text-gray-300 text-bold'>Get access to your Orders, Wishlist and Recommendations</p>
                <img src="https://wallpaperaccess.com/full/2484120.jpg" alt="" className='absolute bottom-10 right-7 w-10/12 rounded-lg'/>
                </div>
                <div className='bg-white p-10 w-3/5'>
                    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                            Email Address<sup>*</sup>
                        </p>
                        <input 
                        required
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter email id'
                        name="email"
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                            Password<sup>*</sup>
                        </p>
                        <input 
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name="password"
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>

                        <span className='absolute right-3 top-[30px] cursor-pointer' onClick = {() => setShowPassword(!showPassword)}>
                        {showPassword  ? (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                        </span>

                        <Link to="#">
                            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                                Forgot Password
                            </p>
                        </Link>
                    </label>

                    <button className='  bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
                        Sign In
                    </button>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default SignIn;