import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const SignUp = ({setIsLoggedIn}) => {
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
     
    const [showPassword,setShowPassword] = useState(false);
    const [showPassword1,setShowPassword1] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData( (prevData) => (
            {
            ...prevData,
            [event.target.name]:event.target.value
            })
        )}
        
        function submitHandler(event){
            event.preventDefault();
            if(formData.password != formData.confirmPassword){
                toast.error("password do not match");
            }
            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/Dashboard");
        }
    return(
        <div className='w-100vh h-[88vh] bg-gray-200 flex flex-col justify-center items-center'>
            <div className='flex  w-11/12 max-w-[900px] h-[82vh] flex-row'>
            <div className='bg-blue-600 p-10 w-2/5 relative'>
                <p className='text-extrabold text-white text-2xl'>Welcome!</p>
                <p className='text-gray-300 text-bold text-lg'>Sign up to get started</p>
                <img src="https://wallpaperaccess.com/full/2484120.jpg" alt="" className='absolute bottom-10 right-7 w-10/12 rounded-lg'/>
            </div>
            <div className='bg-white p-10 w-3/5'>
            <form onSubmit={submitHandler}>
                <div className='flex w-full gap-x-3 mt-4'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>First Name<sup>*</sup></p>

                        <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>
                    
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>Last Name<sup>*</sup></p>

                        <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>
                    
                </div>
                <div className='mt-4'>
                <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                    Email Address<sup>*</sup>
                </p>
                <input 
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email Address'
                name="email"
                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                </div>
                
                <div className='flex gap-x-3 w-full  mt-4'>
                <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                    Create Password<sup>*</sup>
                </p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter password'
                name="password"
                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                <span className='absolute right-1 top-[34px] cursor-pointer' onClick = {() => setShowPassword(!showPassword)}>
                    {showPassword  ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                </span>

                </label>

                <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                    Confirm Password<sup>*</sup>
                </p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder='Confirm password'
                name="confirmPassword"
                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                <span className='absolute  right-1 top-[34px] cursor-pointer' onClick = {() => setShowPassword1(!showPassword1)}>
                    {showPassword1  ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                </span>

                </label>
                </div>

                <button className='bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7 w-full'>
                    Create Account
                </button>
            </form>
            </div>
        </div>
      </div>
    )
}

export default SignUp;