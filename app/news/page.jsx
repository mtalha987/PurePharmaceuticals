import React from 'react'
import Image from 'next/image'
import PageNameBanner from '../Components/PageNameBanner'
import Banner from "@/public/images/newsBanner.svg"
import BreadCrumbs from '../Components/BreadCrumbs'

const page = () => {
  return (
    <>
        <PageNameBanner image={Banner} title="" />
        <BreadCrumbs/>
    </>
  )
}

export default page