'use client'
import React, { useEffect, useState } from 'react'
import { MdMenu, MdOutlineClose } from 'react-icons/md'
import LocaleSwitcher from './locale-switcher'
import Link from 'next/link'

const MobileNav = ({ navigation, lang }: { navigation?: any; lang?: any }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className=''>
      <div>
        {toggle ? (
          <MdOutlineClose
            size={30}
            className='mr-5 text-tertiary'
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <MdMenu
            size={30}
            className='mr-5 text-tertiary'
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <div
        className={`${!toggle ? 'hidden' : 'flex flex-col'} absolute right-0 top-10 z-10 mx-4 my-2 min-w-[140px] rounded-md bg-tertiary p-6`}
      >
        <div className='flex w-full  justify-end pb-5'>
          <LocaleSwitcher />
        </div>
        <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4 text-white'>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
