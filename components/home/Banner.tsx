import { getDictionary } from '@/lib/dictionary'
import { bannerCleaning } from '@/public/assets'

import Image from 'next/image'
import React from 'react'
import InputButton from '../common/InputButton'

const Banner = async ({ lang }: { lang?: any }) => {
  const { banner } = await getDictionary(lang)
  const htmlContent = banner.subtext.replace(/\n/g, '<br>')
  return (
    <div className='h-[100vh] violet-gradient'>
      <div className='container flex h-full w-full flex-col justify-between  lg:flex-row'>
        <div className='flex h-full w-full flex-col items-center justify-center  px-5 lg:w-1/2 lg:px-10'>
          <h1 className='font-poppins text-[35px] font-[800]  mt-10 lg:mt-0 text-transparent  bg-gradient-to-r from-secondprimary  via-purple-500 to-primary bg-clip-text lg:text-[44px] pb-5'>
            {banner.title}
          </h1>
          <div className='text-lg text-secondprimary'>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
          <InputButton text={banner} />
        </div>
        <div className='h-full w-full  lg:w-1/2'>
          <Image
            src={bannerCleaning}
            alt='bannerClean'
            width={500}
            height={500}
            className='h-full w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
