import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const NursingConsultation = () => {
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
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12 bg-default-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10 heading-color">
                    Consulta de Enfermagem
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13 text-color-opacity">Cuidado Domicilar</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <p className="gr-text-9 text-color-opacity mb-9">
                    Apos o diagnóstico médico e necessidade de tratamento em
                    casa, e feito uma consulta com o enfermeiro para definir um
                    plano terapeutico de cuidado sistematizado que irá nortear
                    toda a assistencia a ser prestada.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default NursingConsultation;
