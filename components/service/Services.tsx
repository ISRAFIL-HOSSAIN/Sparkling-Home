'use client'
import React, { useContext, useState } from 'react'
import { StepperContext } from '@/context/StepperContext'
import * as yup from 'yup';
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
type Props = {
  validateForm: (isValid: boolean) => void;
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Services = (props: Props) => {
  const contextValues = useContext(StepperContext)
  const [errors, setErrors] = useState({ username: '', password: '',isOk : '' });
  
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
    // <div className='flex flex-col bg-white rounded-xl container py-10 shadow-lg'>
    //   <div className='mx-2 w-full flex-1'>
    //     <h2 className={`font-[700] text-[35px] text-center ${errors.username || errors.password ? 'text-red-500' : 'text-secondprimary'} `}>Tell us about your cleaning needs</h2>
    //     <div className='mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray'>
    //       Username
    //     </div>
    //     <div className='my-2 flex rounded border border-gray bg-white p-1'>
    //       <input
    //         onChange={handleChange}
    //         value={serviceData['username'] || ''}
    //         name='username'
    //         placeholder='Username'
    //         className='w-full appearance-none p-1 px-2 text-black outline-none'
    //         required
    //       />
    //     </div>
    //     {errors.username && <div className='text-red-500'>{errors.username}</div>}
    //   </div>
    //   <div className='mx-2 w-full flex-1'>
    //     <div className='mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray'>
    //       Password
    //     </div>
    //     <div className='my-2 flex rounded border border-gray bg-white p-1'>
    //       <input
    //         onChange={handleChange}
    //         value={serviceData['password'] || ''}
    //         name='password'
    //         placeholder='Password'
    //         type='password'
    //         className='w-full appearance-none p-1 px-2 text-black outline-none'
    //       />
    //     </div>
    //     {errors.password && <div className='text-red-500'>{errors.password}</div>}
    //   </div>
    // </div>

    <div className="w-md mx-auto container p-6 bg-white shadow-lg rounded-lg">
      <h2 className={`font-[700] text-[35px] text-center ${errors.username || errors.password ? 'text-red-500' : 'text-secondprimary'} `}>Tell us about your cleaning needs</h2>
      <div className="mb-4 pt-10">
        <label className="block text-sm font-medium mb-1" htmlFor="apartment-size">
          Apartment Size
        </label>
        <div className="flex items-center">
          <input type="number" className="w-full" name="apartment-size" placeholder="400" />
          <span className="ml-2 text-sm">m²</span>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1" htmlFor="cleaning-duration">
          Cleaning Duration
        </label>
        <Select>
          <SelectTrigger id="cleaning-duration">
            <SelectValue placeholder="8 hours (recommendation)" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="8">8 hours (recommendation)</SelectItem>
            <SelectItem value="4">4 hours</SelectItem>
            <SelectItem value="12">12 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-1">How often should we clean?</h3>
        <p className="text-sm mb-4">With Freska you will get a regular cleaner!</p>
        <div className="space-y-4">
          <RadioGroup defaultValue="every-week">
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg border-2 border-black">
              <RadioGroupItem id="every-week" value="every-week" />
              <Label className="text-sm font-medium" htmlFor="every-week">
                Every week
              </Label>
              <span className="text-lg font-semibold">324 kr/h</span>
              <span className="text-sm">648 kr/h without RUT deduction</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <RadioGroupItem id="every-second-week" value="every-second-week" />
              <Label className="text-sm font-medium" htmlFor="every-second-week">
                Every second week
              </Label>
              <Badge variant="secondary">Most popular</Badge>
              <span className="text-lg font-semibold">334 kr/h</span>
              <span className="text-sm">668 kr/h without RUT deduction</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <RadioGroupItem id="every-fourth-week" value="every-fourth-week" />
              <Label className="text-sm font-medium" htmlFor="every-fourth-week">
                Every fourth week
              </Label>
              <span className="text-lg font-semibold">349 kr/h</span>
              <span className="text-sm">698 kr/h without RUT deduction</span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="one-time" value="one-time" />
              <Label className="text-sm font-medium" htmlFor="one-time">
                One time only (429 kr/h)
              </Label>
              <span className="text-sm">858 kr/h without RUT deduction</span>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-1">Eco-friendly cleaning supplies</h3>
        <div className="flex items-start space-x-2">
          <InfoIcon className="mt-1 h-6 w-6 text-blue-600" />
          <p className="text-sm">
             eco-friendly and allergy-friendly cleaning supplies are included in your order! Do you have a
            vacuum cleaner, bucket & mop? We use them.
          </p>
        </div>
      </div>
    </div>
  )
}

function InfoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export default Services
