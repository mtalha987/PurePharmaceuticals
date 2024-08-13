import React from 'react'
import AboutUs from '../Components/AboutUs'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import PageNameBanner from '../Components/PageNameBanner';
import Vision from '../Components/about/Vision';
import BannerM from '../Components/BannerM';


const page = () => {
  return (
    <>
        <PageNameBanner title="About Us" image={AboutHeroImg}/>
        <AboutUs/>
        <Vision/>
        <BannerM/>
    </>
  )
}

export default page