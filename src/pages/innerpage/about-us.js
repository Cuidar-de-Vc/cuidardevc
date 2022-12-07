import React from "react";
import { PageWrapper } from "~components/Core";
import BreadCrumbSection from "~sections/about/BreadCrumb";
import AboutSection from '~sections/about/about'
import FeatureSection from '~sections/about/Feature'
import ContentSection from '~sections/about/Content'
import TeamSection from '~sections/about/Team'
import PromoSection from '~sections/about/Promo'
import FooterFive from '~sections/agency/FooterFive'

export default function About() {
  return (
    <PageWrapper innerPage={true}>
        <BreadCrumbSection title="Nossa história" text="Nosso foco é encontrar os melhores profissionais para trabalhar.
        <br class='d-none d-md-block'/>
        Cuidar da sua saúde é sempre o nosso maior compromisso."/>
        <AboutSection/>
        <FeatureSection/>
        <ContentSection/>
        <TeamSection/>
        <PromoSection/>
        <FooterFive/>
    </PageWrapper>
  )
}
