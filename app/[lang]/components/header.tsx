import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import MobileNav from './mobileNav'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)
  return (
    <header className=''>
      <div className='flex justify-end gap-x-4 pt-2 lg:hidden'>
        <MobileNav navigation={navigation} lang={lang} />
      </div>

      <nav className='container flex h-20  items-center justify-between bg-white shadow-sm '>
        <div className='flex flex-row gap-x-4 space-x-5'>
          <Link href={`/${lang}`}>
            <p className='text-2xl font-bold  text-secondprimary'>
            Glansan<span className='text-tertiary'>dehem</span>
            </p>
          </Link>
          <ul className='hidden items-center justify-center gap-x-8 lg:flex'>
            <li>
              <Link href={`/${lang}`}>{navigation.home}</Link>
            </li>
            <li>
              <Link href={`/${lang}/about`}>{navigation.about}</Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-row justify-around'>
          <div>
            <button className='rounded-lg hover:cursor-pointer bg-tertiary hover:bg-indigo-700 px-6 py-1 text-white  shadow-lg'>
              Login
            </button>
          </div>
          <div className='hidden lg:flex'>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}
