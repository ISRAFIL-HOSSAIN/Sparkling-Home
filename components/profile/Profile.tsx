import React from 'react'
import PCard from './Card'
import { Send } from '../common/Icons/Icons'
import { SendIcon } from 'lucide-react'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='container '>
      <div className='flex w-full justify-center pt-5'>
        <div className='rouded-xl flex w-96 justify-center bg-red-200 px-4 py-2 text-center'>
          Notification
        </div>
      </div>

      <div className='container mt-5 flex w-[100%] flex-col lg:flex-row gap-5 justify-center items-center'>
        <div className='flex w-full  flex-col gap-y-7 rounded-xl bg-white px-5 py-5 shadow-lg lg:w-[30%]'>
          <h2>Profile</h2>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Phone</h2>
          <h2>Address</h2>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <h2 className='text-lg font-bold '>Support</h2>
            <textarea
              name='support'
              className='min-h-20 w-full border p-4'
              placeholder='Write description ... '
            />
            <div className='flex w-24 cursor-pointer space-x-3 rounded-full bg-blue-800 px-4 py-2 text-white hover:bg-blue-700'>
              {' '}
              <SendIcon /> <p>Send</p>
            </div>
          </div>
        </div>
        <div className='w-full '>
          <PCard />
        </div>
      </div>


    </div>
  )
}

export default Profile
