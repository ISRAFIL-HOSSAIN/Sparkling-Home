'use client'
import React, { useState } from 'react'
import { DateTime, Payment, Services } from '../service'
import Stepper from './Stepper'
import StepperController from './StepperController'
import { StepperContext } from '@/context/StepperContext'

type Props = {}

const MainStepper = (props: Props) => {
  const steps = ['Service', 'Date & Time', 'Payment']
  const [currentStep, setCurrentStep] = useState(1)
  const [serviceData, setServiceData] = useState('')
  const [dateData, setDateData] = useState('')
  const [paymentData, setPaymentData] = useState('')

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <Services />
      case 2:
        return <DateTime />
      case 3:
        return <Payment />
      default:
    }
  }

  const handleClick = (direction: any) => {
    let newStep = currentStep
    direction === 'next' ? newStep++ : newStep--
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }
  return (
    <div className='container mb-10 flex  flex-col-reverse lg:flex-row lg:space-x-5'>
      <div className=' mx-auto mb-10 mt-10 w-full rounded-xl    lg:w-[55%] '>
        {/* Stepper  */}
        <div className='container mt-5'>
          <Stepper currentStep={currentStep} steps={steps} />

          {/* Diplay Components  */}
          <div className='my-10 p-5'>
            <StepperContext.Provider
              value={{
                serviceData,
                setServiceData,
                paymentData,
                setPaymentData,
                dateData,
                setDateData
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>

        {/* Navigation Controls */}
        {currentStep !== steps.length && (
          <StepperController
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
      <div className='h-40 w-full bg-green-500  lg:mx-5 lg:w-[40%]'></div>
    </div>
  )
}

export default MainStepper
