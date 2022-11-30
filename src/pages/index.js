import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from '~sections/services/Hero'
import CtaSection from '~sections/app/Cta'
import ServicesSection from '~sections/agency/Services'
import ContentSectionOne from '~sections/digital/ContentOne'
import ContentSectionTwo from '~sections/digital/ContentTwo'
import PromoSection from '~sections/app/Promo'
import HeaderButton from '~sections/services/Header'
import FooterFive from '~sections/agency/FooterFive'

const header = {
  headerClasses: "site-header site-header--menu-end site-header--services dark-header site-header--sticky site-header--service",
  containerFluid:false,
  darkLogo:false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="CONTATO"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Services() {
  return (
    <PageWrapper headerConfig={header}>
        <HeroSection/>
        <CtaSection/>
        <ServicesSection/>
        <ContentSectionOne/>
        <ContentSectionTwo/>
        <PromoSection/>
        <FooterFive/> 
        </PageWrapper>
  )
}
