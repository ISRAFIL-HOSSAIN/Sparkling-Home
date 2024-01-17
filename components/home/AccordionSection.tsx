import React from 'react'
import Accordion from '../common/Accordion'

type Props = {}

const AccordionSection = ({
  accordionTitle,
  accordion
}: {
  accordionTitle: any
  accordion: any
}) => {
  const htmlContent = accordionTitle.textinfo.replace(/\n/g, '<br>')
  return (
    <div className='container flex flex-col items-center justify-center py-20'>
      <div className='mb-10 container flex flex-col items-center justify-center '>
        <h1 className='font-poppins text-center text-[24px] font-[800] text-secondprimary'>
          {accordionTitle.title}
        </h1>
        <p className='py-5 text-center font-sans text-[12px] font-[500]'>
          {accordionTitle.subtext}
        </p>

        <div className='lg:w-1/2 text-lg font-[500] text-center py-8 text-secondprimary container flex flex-col items-center justify-center '>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>

      <Accordion data={accordion} />
    </div>
  )
}

export default AccordionSection
