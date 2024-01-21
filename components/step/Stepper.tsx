'use client'
import React, { useEffect, useState, useRef } from 'react'

type Props = {
  currentStep: any
  steps: any
}

interface StepType {
  description: string
  completed: boolean
  highlighted: boolean
  selected: boolean
}

const Stepper = (props: Props) => {
  const { currentStep, steps } = props
  const [newStep, setNewStep] = useState<StepType[]>([])
  const stepRef = useRef()

  const updateStep = (stepNumber: any, steps: any) => {
    const newSteps = [...steps]
    let count = 0; 
    while(count < newSteps.length){
        //current step 
        if(count === stepNumber){
            newSteps[count] = {
                ...newSteps[count], 
                heighlighted: true, 
                selected:true, 
                completed : true,
            }
            count++;
        }
        // step completed 
        else if(count < stepNumber){
            newSteps[count] = {
                ...newSteps[count], 
                heighlighted: false, 
                selected:true, 
                completed : true,
            }
            count++;
        }
        // step pending
        else{
            newSteps[count] = {
                ...newSteps[count], 
                heighlighted: false, 
                selected:false, 
                completed : false,
            }
            count++;
        }
    }
    return newSteps;
  }
  useEffect(() => {
    // create object
    const stepsState = steps.map((step: any, index: any) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false
        }
      )
    )
    stepRef.current = stepsState
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current!)
  }, [steps, currentStep])

  const displaySteps = newStep.map((step: any, index: any) => {
    return (
      <div className={` ${index !== newStep.length - 1 ? "flex w-full items-center" : "flex items-center"}`} key={index}>
        <div className='relative flex flex-col items-center text-teal-600'>
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray
                 py-3 transition duration-500 ease-in-out ${step.selected ? "bg-green-600 text-white font-bold border border-green-600" : ""}`}
          >
            {/* Display number  */}
            {step.completed ? (
                <span className='text-white font-bold text-xl'>&#10003;</span>
            ) : (index + 1) }
          </div>
          <div className={`absolute top-0 mt-16 w-32 text-center text-xs font-medium uppercase ${step.highlighted ? "text-black ":"text-gray"}`}>
            {/* Display description  */}
           {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2 border-gray transition duration-500 ease-in-out ${step.completed ? "border-green-600":"border-gray"}`}>
          {/* Display line  */}
        </div>
      </div>
    )
  })

  return (
    <div className='mx-4 flex items-center justify-between p-4'>
      {displaySteps}
    </div>
  )
}

export default Stepper
