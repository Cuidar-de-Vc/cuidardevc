import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";
import Testimonial1 from "../sections/landing1/Testimonial1";
import Content1 from "../sections/landing1/Content1";
import Fact from "../sections/landing1/Fact";
import Feature from "../sections/landing1/Feature";
// import Cta1 from "../sections/landing1/Cta1";
import CaseStudies from "../sections/landing1/CaseStudies";
import Testimonial2 from "../sections/landing1/Testimonial2";
// import Cta2 from "../sections/landing1/Cta2";

const IndexPage2 = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "null", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Testimonial1 />
        <Content1 />
        <Fact />
        <Feature />
        {/* <Cta1 /> */}
        <CaseStudies />
        <Testimonial2 />
        {/* <Cta2 /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage2;
