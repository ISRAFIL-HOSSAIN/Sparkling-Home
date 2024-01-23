'use client'
import React from 'react'

type Props = {
  handleClick?: any
  currentStep?: any
  steps?: any
  isServiceFormValid?:any;
}

const StepperController = (props: Props) => {
  const { handleClick, currentStep, steps,isServiceFormValid } = props
  return (
    <div className='container mb-8 mt-4 flex justify-around'>
      {/* back button */}
      <button
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white 
            px-4 py-2 font-semibold uppercase text-slate-400 transition
          duration-200 ease-in-out hover:bg-slate-700 hover:text-white
        ${currentStep === 1 ? "opacity-50 cursor-not-allowed ":""}
          `}
        onClick={() => handleClick("prev")}
      >
        Back
      </button>

      {/* next button  */}
      <button
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-green-500 
            px-4 py-2 font-semibold uppercase text-white transition
            duration-200 ease-in-out hover:bg-primary hover:text-white
            ${
              currentStep === steps.length - 1
                ? 'bg-green-500 text-white'
                : 'bg-green-500 hover:bg-primary hover:text-white'
            }
          `}
          disabled={currentStep === 1 && !isServiceFormValid}
        onClick={() => handleClick("next")}
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  )
}

export default StepperController
