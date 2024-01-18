import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Stepper from '@/components/step/Stepper'
import StepperController from '@/components/step/StepperController'

type Props = {}

export default async function Service({
    params: { lang }
  }: {
    params: { lang: Locale }
  }) {
    const { page,banner,section,accordionTitle,accordion,slider } = await getDictionary(lang)
  
    return (
      // Banner Section 
      <>
      <div className="min-h-[100vh] container">
        {"Service Page "} 
        {/* Stepper  */}
        <div className="container horizontal mt-5">
            <Stepper />
        </div>

        {/* Navigation Controls */}
        <StepperController />
      </div>
      
        
      </>
    )
  }