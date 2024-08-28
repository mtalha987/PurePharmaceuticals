import PageNameBanner from '@/app/Components/PageNameBanner'
import React from 'react'
import Banner from '@/public/images/companyBanner.svg';
import BreadCrumbs from '@/app/Components/BreadCrumbs';
import CompanyProfile from '@/app/Components/about/CompanyProfile';

const page = () => {
  return (
    <>
        <PageNameBanner image={Banner} title=""/>
        <BreadCrumbs/>
        <main>
            <CompanyProfile/>
        </main>
    </>
  )
}

export default page