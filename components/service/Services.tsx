'use client'
import React, { useContext, useState } from 'react'
import { StepperContext } from '@/context/StepperContext'
import * as yup from 'yup';

type Props = {
  validateForm: (isValid: boolean) => void;
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Services = (props: Props) => {
  const [errors, setErrors] = useState({ username: '', password: '' });
  const contextValues = useContext(StepperContext)
  if (!contextValues) {
    // Handle the case when contextValues is null
    return null // or return a loading/error message, or render nothing
  }

  const { serviceData, setServiceData } = contextValues

  const handleChange = async (e: any) => {
    const { name, value } = e.target
    setServiceData({ ...serviceData, [name]: value })

    try {
      await validationSchema.validateAt(name, serviceData);
      setErrors({ ...errors, [name]: '' });
    } catch (error:any) {
      setErrors({ ...errors, [name]: error.message });
    }

    const isValid = !(errors.username || errors.password);
    props.validateForm(isValid);

  }
  return (
    <div className='flex flex-col bg-white rounded-xl container py-10 shadow-lg'>
      <div className='mx-2 w-full flex-1'>
        <h2 className='font-bold text-[30px] text-center '>Tell us about your cleaning needs</h2>
        <div className='mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray'>
          Username
        </div>
        <div className='my-2 flex rounded border border-gray bg-white p-1'>
          <input
            onChange={handleChange}
            value={serviceData['username'] || ''}
            name='username'
            placeholder='Username'
            className='w-full appearance-none p-1 px-2 text-black outline-none'
            required
          />
        </div>
        {errors.username && <div className='text-red-500'>{errors.username}</div>}
      </div>
      <div className='mx-2 w-full flex-1'>
        <div className='mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray'>
          Password
        </div>
        <div className='my-2 flex rounded border border-gray bg-white p-1'>
          <input
            onChange={handleChange}
            value={serviceData['password'] || ''}
            name='password'
            placeholder='Password'
            type='password'
            className='w-full appearance-none p-1 px-2 text-black outline-none'
          />
        </div>
        {errors.password && <div className='text-red-500'>{errors.password}</div>}
      </div>
    </div>
  )
}

export default Services
