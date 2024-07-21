import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

const Payment = () => {
    const[formData,setFormData] = useState({
         cardHolderName:"",
         cardNumber:"",
         cvv:""
    })
    const navigate = useNavigate();
    const [password,setPassword] = useState(true);
    const [password1,setPassword1] = useState(true);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
            ...prevData,
            [event.target.name]:event.target.value
            })
        )}
        
        function submitHandler(event){
            event.preventDefault();
            toast.success("Order Placed Successfully");
            navigate("/Dashboard");
        }
    return(
        <div className='w-100vh h-[88vh] bg-gray-200 flex flex-col justify-center items-center'>
            <div className='flex  w-11/12 max-w-[900px] h-[82vh] flex-row'>
            <div className='bg-blue-600 p-10 w-2/5 relative'>
                <p className='text-extrabold text-white text-2xl'>Payment!</p>
                <p className='text-gray-300 text-bold text-lg'>Enter Your Card Details</p>
                <img src="https://www.tripsavvy.com/thmb/-bM79lt4vtyzrtlwL3u048vhT_c=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/debit-card-80486969-57102de25f9b588cc27b8924.jpg" alt="" className='absolute bottom-10 right-7 w-10/12 rounded-lg'/>
            </div>
            <div className='bg-white p-10 w-3/5'>
            <form onSubmit={submitHandler}>
                <div className='flex w-full gap-x-3 mt-4'>
                    <div className='w-full '>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>Card Holder's Name<sup>*</sup></p>

                        <input
                        required
                        type="text"
                        name="cardHolderName"
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.cardHolderName}
                        className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    </label>
                    </div>
                </div>
                <div className='mt-4 relative'>
                <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                    Card Number<sup>*</sup>
                </p>
                <input 
                required
                type={password ? ("password") : ("number")}
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email Address'
                name="email"
                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                <span className='absolute top-9 right-1 cursor-pointer' onClick = {() => setPassword(!password)}>
                    {
                         password ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                </div>
                
                <div className='mt-4 relative'>
                <label>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.175rem]'>
                    Cvv<sup>*</sup>
                </p>
                <input
                required
                type={password ? ("password") : ("number")}
                value={formData.cvv}
                onChange={changeHandler}
                placeholder='Enter Your Cvv'
                name="cvv"
                className='bg-gray-200 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
                <span className='absolute top-9 right-1 cursor-pointer' onClick = {() => setPassword1(!password1)}>
                    {
                        password1 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
                </div>
         
                <button className='bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7 w-full'>
                    Pay Now
                </button>
            </form>
            </div>
        </div>
      </div>
    )
}

export default Payment;