import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import {
  CheckIcon,
  CircleIcon,
  LocateIcon,
  PawPrintIcon
} from '../common/Icons/Icons'
type Props = {}

const PCard = (props: Props) => {
  return (
    <Card className='mx-5 w-full rounded-lg bg-white shadow-md'>
      <CardHeader>
        <CardTitle className='text-gray-700 text-lg font-semibold '>
          Service Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex lg:flex-row flex-col  justify-between '>
        <div className='flex justify-start space-x-10 my-2 w-full items-center'>
          <p className='flex justify-center items-center rounded-xl h-8 bg-indigo-500 px-4 text-sm text-white text-center '>
            Service Taken{' '}
          </p>
          <h2 className='mb-3 text-4xl font-bold text-blue-900'>Every Week </h2>
        </div>
        <div className='flex justify-start space-x-10 my-2 w-full items-center'>
          <p className='flex justify-center items-center rounded-xl h-8 bg-indigo-500 px-4 text-sm text-white text-center '>
            Your Cleaning Time {' '}
          </p>
          <div>
            <h2 className='mb-3 lg:text-2xl text-lg font-bold text-blue-900'>3.5 Hourse</h2>
            <h2 className='mb-3 lg:text-2xl text-lg font-bold text-blue-900'>1/25/2024  2:04</h2>
          </div>
        </div>
        </div>

        <div className='border-gray-200 flex justify-start space-x-10 border-t py-4'>
          <div className='flex items-center space-x-1'>
            <CheckIcon className='h-5 w-5 text-green-500' />
            <span className='text-gray-700 text-sm font-medium'>
              Have Pets 
            </span>
          </div>
          <div className='flex items-center space-x-1'>
            <PawPrintIcon className='text-gray-700 h-5 w-5' />
            <span className='text-gray-700 text-sm font-medium'>Cats</span>
          </div>
        </div>
        
        <div className='border-gray-200 border-t pt-4'>
          <div className='rounded-lg bg-slate-100 p-5 '>
            <div className='flex justify-between'>
              <span className='text-gray-700 text-sm'>
                Cleaning 648 kr/h x 3.5 h
              </span>
              <span className='text-gray-900 text-sm font-medium'>
                2,268 kr
              </span>
            </div>
            <div className='flex justify-between py-2'>
              <span className='text-gray-700 text-sm'>
                Eco-friendly cleaning supplies
              </span>
              <span className='text-gray-900 text-sm font-medium'>49 kr</span>
            </div>
            <div className='flex justify-between py-2'>
              <span className='text-gray-700 text-sm font-medium'>
                Before RUT deduction
              </span>
              <span className='text-gray-900 text-sm font-medium'>
                2,317 kr
              </span>
            </div>
            <div className='flex justify-between pt-2'>
              <span className='text-gray-800 text-lg font-bold'>TOTAL</span>
              <span className='text-2xl font-bold text-blue-800'>1,183 kr</span>
            </div>
            <div className='flex justify-between pt-2'>
              <span className='text-gray-800 text-lg font-bold text-red-500'>DUE PAYMENT</span>
              <div className='flex space-x-5 justify-center items-center '>
              <span className='text-2xl font-bold text-blue-800'>500 kr</span>
              <button className='bg-blue-800 hover:bg-blue-700 text-white text-sm normal px-4 py-2 rounded-lg'>pay</button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PCard
