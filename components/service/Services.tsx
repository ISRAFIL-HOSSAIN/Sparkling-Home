'use client'
import React, { useContext, useEffect, useState } from 'react'
import { StepperContext } from '@/context/StepperContext'
import * as yup from 'yup'
import { Input } from '@/components/ui/input'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
type Props = {
  validateForm: (isValid: boolean) => void
}

const validationSchema = yup.object().shape({
  apartmentSize: yup.number().required('Size is required !'),
  cleaningDuration: yup.number().required('Duration is required !'),
  cleaningFrequency: yup.string().required('Frequency is required')
})

const Services = (props: Props) => {
  const [errors, setErrors] = useState({
    apartmentSize: '',
    cleaningDuration: '',
    cleaningFrequency: ''
  })

  const contextValues = useContext(StepperContext)
  if (!contextValues) {
    return null
  }

  const { serviceData, setServiceData } = contextValues
  // const storedFormData = localStorage.getItem('formData')
  // const parsedFormData = storedFormData ? JSON.parse(storedFormData) : null

  const cleaningFrequencyOptions = [
    { value: 'every-week', label: 'Every week', rate: 324 },
    {
      value: 'every-second-week',
      label: 'Every second week',
      rate: 334
    },
    { value: 'every-fourth-week', label: 'Every fourth week', rate: 349.5 },
    { value: 'one-time', label: 'One Time Only', rate: 429 }
  ]

  const handleChange = async (e: any, customValue?: string) => {
    const { name, value } = e.target
    const newValue = customValue || value // Use customValue if provided, otherwise use the input value
    const apartmentSize = parseInt(newValue, 10);
    setServiceData({
      ...serviceData,
      cleaningDuration: Duration(apartmentSize),
      [name]: newValue
    })

    try {
      await validationSchema.validateAt(name, serviceData)
      setErrors({ ...errors, [name]: '' })
    } catch (error: any) {
      setErrors({ ...errors, [name]: error.message })
    }

    const isValid = !(errors.apartmentSize || errors.cleaningFrequency)
    props.validateForm(isValid)
  }
  
  const Duration = (size:any) => {
    if (size < 40) {
      return 2;
    } else if (size >= 41 && size <= 60) {
      return 2.5;
    } else if (size >= 61 && size <= 79) {
      return 3; 
    } else if (size >= 80 && size <= 100) {
      return 3.5;
    } else if (size >= 101 && size <= 119) {
      return 4;
    } else if (size >= 120 && size <= 150) {
      return 4.5;
    } else if (size >= 151 && size <= 175) {
      return 5; 
    }
    else if (size >= 176 && size <= 195) {
      return 5.5; 
    }
    else if (size >= 196 && size <= 215) {
      return 6; 
    }
    else if (size >= 216 && size <= 235) {
      return 6.5; 
    }
    else if (size >= 236 && size <= 255) {
      return 7; 
    }
    else if (size >= 256 && size <= 285) {
      return 7.5; 
    }
    else if (size >= 286) {
      return 8; 
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      let storedFormData = localStorage.getItem('formData')
      const parsedFormData = storedFormData ? JSON.parse(storedFormData) : null; 
      let cleanDuration = Duration(parsedFormData?.size);
      setServiceData({
        cleaningFrequency: 'every-second-week',
        apartmentSize: parsedFormData?.size || 0,
        cleaningDuration: cleanDuration || 0,
      })
    }
   
   
  }, [setServiceData])
  
  
  return (
    <div className='lg:w-md w-full rounded-lg  bg-white p-5 px-4  shadow-lg lg:mx-auto lg:px-10'>
      <h2
        className={`text-center text-[35px] font-[700] ${errors.apartmentSize || errors.cleaningFrequency ? 'text-red-500' : 'text-secondprimary'} `}
      >
        Tell us about your cleaning needs
      </h2>
      {/* Apartment Size  */}
      <div className='mb-4 pt-10'>
        <label
          className='mb-1 block text-sm font-medium'
          htmlFor='apartment-size'
        >
          Apartment Size
        </label>
        <div className='flex items-center border px-2 py-1'>
          <Input
            type='number'
            className='w-full border-0'
            name='apartmentSize'
            placeholder='Size'
            onChange={handleChange}
            value={serviceData['apartmentSize'] || ''}
          />
          <span className='ml-2 text-sm'>m²</span>
        </div>
        {errors.apartmentSize && (
          <div className='text-red-500'>{errors.apartmentSize}</div>
        )}
      </div>
      {/* -------------------------- */}
      {/* Cleaning Duration  */}
      <div className='mb-6'>
        <label
          className='mb-1 block text-sm font-medium'
          htmlFor='cleaning-duration'
        >
          Cleaning Duration
        </label>
        <Select>
          <SelectTrigger
            id='cleaningDuration'
            name='cleaningDuration'
            className='px-2 py-1'
            onChange={handleChange}
            value={serviceData['cleaningDuration'] || ''}
          >
            <SelectValue placeholder={serviceData['cleaningDuration'] + " " + " hours (recommendation)"} />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='2'>2 hours</SelectItem>
            <SelectItem value='2.5'>2.5 hours</SelectItem>
            <SelectItem value='3'>3 hours</SelectItem>
            <SelectItem value='3.5'>3.5 hours</SelectItem>
            <SelectItem value='4'>4 hours</SelectItem>
            <SelectItem value='4.5'>4.5 hours</SelectItem>
            <SelectItem value='5'>5 hours</SelectItem>
            <SelectItem value='5.5'>5.5 hours</SelectItem>
            <SelectItem value='6'>6 hours</SelectItem>
            <SelectItem value='6.5'>6.5 hours</SelectItem>
            <SelectItem value='7'>7 hours</SelectItem>
            <SelectItem value='7.5'>7.5 hours</SelectItem>
            <SelectItem value='8'>8 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* --------------------------- */}

      <div className='mb-6'>
        <h3 className='mb-1 text-sm font-medium'>How often should we clean?</h3>
        <p className='mb-4 text-sm'>
          With Glansandehem you will get a regular cleaner!
        </p>
        <div className='space-y-4'>
          {cleaningFrequencyOptions.map(option => (
            <div
              key={option.value}
              className={`bg-gray-100 h-24 items-center  cursor-pointer   rounded-lg  ${serviceData?.cleaningFrequency === option.value ? 'border-2 border-black' : 'border'}`}
              onClick={() =>
                handleChange(
                  {
                    target: { name: 'cleaningFrequency', value: option.value }
                  },
                  option.value
                )
              }
            >
              {option.value === 'every-second-week' && (
                <div className='flex items-end justify-end  '>
                  <p className=' rounded-br-0 rounded-bl-full rounded-tl-sm rounded-tr-lg bg-secondprimary px-4 py-1 text-center text-[12px] font-bold text-white'>
                    Most Popular
                  </p>
                </div>
              )}

              <div className='flex items-center justify-between p-4'>
                <div className='flex flex-col items-start justify-start'>
                  <Label
                    className={` ${serviceData?.cleaningFrequency === option.value ? 'text-md font-bold' : 'text-sm font-normal'}`}
                    htmlFor={option.value}
                  >
                    {option.label}
                  </Label>
                  <span className='text-sm'>
                    {option.rate} kr/h without RUT deduction
                  </span>
                </div>
                <span className='items-end text-lg font-semibold'>
                  {option.rate} kr/h
                </span>
              </div>
            </div>
          ))}

          {errors.cleaningFrequency && (
            <div className='text-red-500'>{errors.cleaningFrequency}</div>
          )}
        </div>
      </div>
      <div className='mb-6 '>
        <h3 className='mb-1 text-sm font-medium'>
          Eco-friendly cleaning supplies
        </h3>
        <div className='flex items-start space-x-2 rounded-lg bg-teal-100 px-4 py-4'>
          <InfoIcon className='mt-1 h-10 w-16 text-blue-600' />
          <p className='text-sm'>
            eco-friendly and allergy-friendly cleaning supplies are included in
            your order! Do you have a vacuum cleaner, bucket & mop? We use them.
          </p>
        </div>
      </div>
    </div>
  )
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 16v-4' />
      <path d='M12 8h.01' />
    </svg>
  )
}

export default Services
