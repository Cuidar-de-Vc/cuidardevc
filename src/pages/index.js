import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing5/Hero2";
import Services from "../sections/landing10/AboutIntro";
import Services2 from "../sections/landing1/Services2";
// import Testimonial1 from "../sections/landing1/Testimonial1";
// import Content1 from "../sections/landing1/Content1";
// import Fact from "../sections/landing1/Fact";
// import Feature from "../sections/landing1/Feature";
// import Testimonial2 from "../sections/landing1/Testimonial2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          isFluid: true,
          button: "null", // cta, account, null
        }}
        footerConfig={{
          style: "style4", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Services2 />
        {/* <Testimonial1 /> */}
        {/* <Content1 /> */}
        {/* <Fact /> */}
        {/* <Feature /> */}
        {/* <Testimonial2 /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
