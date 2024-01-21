'use client'
import React, { useContext } from 'react'
import { StepperContext } from '@/context/StepperContext'

type Props = {}

const Services = (props: Props) => {
  const contextValues = useContext(StepperContext)
  if (!contextValues) {
    // Handle the case when contextValues is null
    return null // or return a loading/error message, or render nothing
  }

  const { serviceData, setServiceData } = contextValues

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setServiceData({ ...serviceData, [name]: value })
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
      </div>
    </div>
  )
}

export default Services
