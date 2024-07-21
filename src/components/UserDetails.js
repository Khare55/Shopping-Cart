import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const UserDetails = () => {
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        stAddress:"",
        city:"",
        state:"",
        pin:""
    })

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
            navigate("/Payment");
        }
    return(
        <div className='w-100vh h-[88vh] bg-gray-200 flex flex-col justify-center items-center'>
            <div className='flex  w-11/12 max-w-[900px] h-[82vh] flex-row'>
                <div className='bg-blue-600 p-10 w-2/5 relative'>
                    <p className='text-extrabold text-white text-2xl'>Details!</p>
                    <p className='text-gray-300 text-bold text-lg'>Enter your Details for Next Step Verification</p>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.oO3su7ANWeX-shsvxMeMJwHaFO&pid=Api&P=0&h=180" alt="" className='absolute bottom-10 right-7 w-10/12 rounded-lg'/>
                </div>
                <div className='bg-white p-5  w-3/5'>
                    <form onSubmit={submitHandler}>
                        <div className='flex w-full gap-x-3 -mt-3'>
                            <label>
                                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                                First Name<sup>*</sup></p>
                                <input
                                required
                                type="text"
                                name="firstName"
                                onChange={changeHandler}
                                placeholder='Enter First Name'
                                value={formData.firstName}
                                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mr-5 '/>
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
                                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mr-5'/>
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
                        
                        <div className='mt-4'>
                        <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                            Street Address<sup>*</sup>
                        </p>
                        <input
                        required
                        type="text"
                        value={formData.stAddress}
                        onChange={changeHandler}
                        placeholder='Enter your street location'
                        name="stAddress"
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                        </label>
                        </div>

                        <div className='mt-4'>
                            <label>
                            <p>City<sup>*</sup></p>
                            <input 
                            type="text" 
                            placeholder='Kolkata'
                            name="city"
                            onChange={changeHandler}
                            value={formData.city}
                            className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                            </label>
                        </div>

                        <div className='mt-4'>
                            <label>
                            <p>State<sup>*</sup></p>
                            <input 
                            type="text" 
                            placeholder='Bihar'
                            name="state"
                            onChange={changeHandler}
                            value={formData.state}
                            className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                            </label>
                        </div>

                        <div className='mt-4'>
                            <lable>
                            <p>Pin Code<sup>*</sup></p>
                            <input
                            type="text"
                            placeholder='841403'
                            name="pin"
                            onChange={changeHandler}
                            value={formData.pin}
                            className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                            </lable>
                        </div>
                        <div className='relative'>
                        <button className='bg-yellow-500 rounded-[8px] text-md text-extrabold text-richblack-800 px-[25px] py-[8px] mt-2 absolute right-0'>
                          Next
                         </button>
                         <FaArrowRight className='mt-5 absolute right-1'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;