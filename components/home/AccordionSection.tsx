import React from 'react'
import Accordion from '../common/Accordion'

type Props = {}

const AccordionSection = ({
  accordionTitle,
  accordion,
  isTitle
}: {
  accordionTitle: any
  accordion: any
  isTitle?: boolean
}) => {
  const htmlContent = accordionTitle.textinfo.replace(/\n/g, '<br>')
  return (
    <div className='container flex flex-col items-center justify-center py-20'>
      {isTitle === true && (
        <div className='container mb-10 flex flex-col items-center justify-center '>
          <h1 className='font-poppins text-center text-[24px] font-[800] text-secondprimary'>
            {accordionTitle.title}
          </h1>
          <p className='py-5 text-center font-sans text-[12px] font-[500]'>
            {accordionTitle.subtext}
          </p>

          <div className='container flex flex-col items-center justify-center py-8 text-center text-lg font-[500] text-secondprimary lg:w-1/2 '>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      )}

      <Accordion data={accordion} />
    </div>
  )
}

export default AccordionSection
