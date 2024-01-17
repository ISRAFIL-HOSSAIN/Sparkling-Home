import React from 'react'
const InputButton = ({text}:{text?:any}) => {
  return (
    <div className='flex flex-row py-5 '>
      <div className='flex h-[70px] w-40 items-center justify-center rounded-none  rounded-l-full bg-white hover:border hover:border-primary focus:border-primary'>
        <input
          type='number'
          placeholder={text.size}
          className='h-12 w-24 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-primary'
        />
        <span className='text-gray-500 text-md font-medium '>
          m<sup>2</sup>
        </span>
      </div>
      <div className='border-l-gray-300 flex h-[70px] items-center justify-center rounded-none rounded-r-full border-l  bg-white hover:border hover:border-primary focus:border-primary'>
        <input
          type='number'
          placeholder={text.postcode}
          className='h-12 w-24 pl-3 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-primary'
        />
        <button className='lg:text-[15px] text-[10px] ml-5 mr-4 rounded-full bg-primary  px-5 py-3 h-[55px] font-medium text-white'>
          {text.bannerButton}
        </button>
      </div>
    </div>
  )
}

export default InputButton
