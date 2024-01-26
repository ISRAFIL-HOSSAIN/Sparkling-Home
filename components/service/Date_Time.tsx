'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-react'

export default function Date_Time() {
  const [pets, setPets] = useState({
    cats: false,
    dogs: false,
    otherPets: false
  })

  return (
    <div className='w-full rounded-xl bg-white p-6 shadow-lg'>
      <h2 className='mb-6 text-center text-[40px] font-semibold'>
        Where will we come to clean?
      </h2>
      <div className='mb-4  flex gap-4 '>
        <Input
          className='border-gray-300 px-2 py-1'
          placeholder='Street address and number'
        />
        <Input className='border-gray-300 px-2 py-1' placeholder='Postcode' />
      </div>

      <PetChecked pets={pets} setPets={setPets} />

      <div className='mb-4 flex flex-col gap-4'>
        <label className=' text-sm font-bold' htmlFor='date-time'>
          Date and Time
        </label>
        <Input id='date-time' type='datetime-local' />
      </div>
      
      <div className='flex items-center rounded-lg bg-red-100 p-4 text-red-700'>
        <FrownIcon className='mr-2 text-red-500' />
        <p>
          {
            "Oh no! We couldn't find your address! Please make sure address and post code are correct."
          }
        </p>
      </div>
    </div>
  )
}

function PetChecked(props: any) {
  const { setPets, pets } = props
  const [isOpen, setIsOpen] = useState(false)
  const handleCheckboxChange = (id: any) => {
    setPets((prevPets: any) => ({
      ...prevPets,
      [id]: !prevPets[id]
    }))
  }
  return (
    <div className='mb-4 bg-slate-100 w-80 py-5 px-2'>
      <div className='mb-2 flex items-center'>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className='w-[350px] space-y-2'
        >
          <div className='flex items-center justify-between space-x-4 px-4'>
            <h4 className='text-sm font-semibold'>Pets Live Here</h4>
            <CollapsibleTrigger asChild>
              <Button variant='ghost' size='sm' className='w-9 p-0'>
                <ChevronsUpDown className='h-4 w-4' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='space-y-2 ml-5'>
            <p className='text-gray-600  mt-1 text-sm'>
              {"What kind? Let's pick you a cleaner without allergies."}
            </p>
            <div className='rounded-md border px-4 py-3 font-mono text-sm flex space-x-4 bg-white'>
              <div className='mb-2 flex items-center'>
                <input
                  type='checkbox'
                  id='cats'
                  checked={pets.cats}
                  onChange={() => handleCheckboxChange('cats')}
                />
                <label className='ml-2 text-sm font-medium' htmlFor='cats'>
                  Cats
                </label>
              </div>
              <div className='mb-2 flex items-center'>
                <input
                  type='checkbox'
                  id='dogs'
                  checked={pets.dogs}
                  onChange={() => handleCheckboxChange('dogs')}
                />
                <label className='ml-2 text-sm font-medium' htmlFor='dogs'>
                  Dogs
                </label>
              </div>
              <div className='mb-2 flex items-center'>
                <input
                  type='checkbox'
                  id='other-pets'
                  checked={pets.otherPets}
                  onChange={() => handleCheckboxChange('otherPets')}
                />
                <label
                  className='ml-2 text-sm font-medium'
                  htmlFor='other-pets'
                >
                  Other pets
                </label>
              </div>
            </div>
            
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

function FrownIcon(props: any) {
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
      <path d='M16 16s-1.5-2-4-2-4 2-4 2' />
      <line x1='9' x2='9.01' y1='9' y2='9' />
      <line x1='15' x2='15.01' y1='9' y2='9' />
    </svg>
  )
}
