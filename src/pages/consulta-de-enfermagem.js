import React from "react";
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/sv02-banner.png";

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
                  <p className="gr-text-7 mb-0 mb-lg-13 text-color-opacity">Cuidado Domiciliar</p>
                </div>
              </Col>
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
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
                    Apos o diagnóstico médico e a necessidade de tratamento em
                    casa, e feito uma consulta com o enfermeiro para definir um
                    plano terapeutico de cuidado sistematizado que irá nortear
                    toda a assistencia a ser prestada.
                  </p>
                  <p className="gr-text-9 text-color-opacity mb-9">
                    A consulta de enfermagem  e privativa e prestada pelo
                    enfermeiro, na qual são identificados problemas de saúde,
                    prescritos cuidados e implementadas ações de enfermagem com
                    o objetivo de alcançar a promoção, proteção, recuperação ou
                    reabilitação do paciente.
                  </p>
                  <Link to="/contato" className="btn btn-primary mt-3 mt-lg-10">
                    Entre em contato
                  </Link>
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
