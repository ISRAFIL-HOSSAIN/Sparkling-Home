import React from 'react';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import MainStepper from '@/components/step/MainStepper';

export default async function Service({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, banner, section, accordionTitle, accordion, slider } =await getDictionary(lang);

  return (
    // Banner Section
    <>
      <div className=' min-h-[100vh] bg-[#f0f1f4] '>
       <MainStepper accordionTitle={accordionTitle} accordion={accordion} />
      </div>
    </>
  )
}
