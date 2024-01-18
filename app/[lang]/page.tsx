import { Banner,Section,AccordionSection, ContactSection } from '@/components/home'
import CarouselSlider from '@/components/home/CarouselSlider'
import ChooseSection from '@/components/home/ChooseSection'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page,banner,section,accordionTitle,accordion,slider } = await getDictionary(lang)

  return (
    // Banner Section 
    <>
      <Banner lang={lang} banner={banner}/>
      <Section text={section}  />
      <AccordionSection accordionTitle={accordionTitle} accordion={accordion}/>
      <CarouselSlider slider={slider}/>
      <ChooseSection text={section}/>
      <ContactSection />
      
    </>
  )
}
