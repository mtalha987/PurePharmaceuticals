import React from 'react'
import ContactInformation from '../Components/contact/ContactInformation'
import PageNameBanner from '../Components/PageNameBanner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchUs from '../Components/contact/TouchUs'

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={AboutHeroImg}/>
      <TouchUs/>
      <ContactInformation/>
    </>
  )
}

export default page