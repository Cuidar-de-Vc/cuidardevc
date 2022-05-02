import React from "react";
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgS1 from "../assets/image/l3/jpg/l3-service-img11.jpg";
import imgS2 from "../assets/image/l3/jpg/l3-service-img22.jpg";
import imgS3 from "../assets/image/l3/jpg/l3-service-img33.jpg";

const ServicesPage = () => {
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
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-0">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12 heading-color">Serviços Que Prestamos</h2>
                  <p className="gr-text-8 text-color-opacity mb-0 text-color-opacity">
                    Nós oferecemos aos nossos pacientes serviços de alta qualidade
                    com os melhores profissionais do mercado.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-23 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
                <div className="service-card">
                  <h3 className="card-title gr-text-7 heading-color mb-7">Cuidados de Enfermagem Domiciliar Intensivo</h3>
                  <div className="img-thumb mb-8">
                    <img className="rounded-10 w-100" src={imgS1} alt="" />
                  </div>
                  <p className="excerpt gr-text-9 text-color-opacity mb-6">
                    Os pacientes agora podem receber cuidados de enfermagem em casa diariamente com serviços de alta qualidade.
                  </p>
                  <Link
                    to="/#"
                    className="btn-link with-icon gr-text-9 fw-bold"
                  >
                    Saiba mais{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </Col>
              <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
                <div className="service-card">
                  <h3 className="card-title gr-text-7 heading-color mb-7">Cuidados com Idosos</h3>
                  <div className="img-thumb mb-8">
                    <img className="rounded-10 w-100" src={imgS1} alt="" />
                  </div>
                  <p className="excerpt gr-text-9 text-color-opacity mb-6">
                    Os pacientes agora podem receber cuidados de enfermagem em casa diariamente com serviços de alta qualidade.
                  </p>
                  <Link
                    to="/#"
                    className="btn-link with-icon gr-text-9 fw-bold"
                  >
                    Saiba mais{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </Col>
              <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
                <div className="service-card">
                  <h3 className="card-title gr-text-7 heading-color mb-7">Cuidado Domiciliar por Hora</h3>
                  <div className="img-thumb mb-8">
                    <img className="rounded-10 w-100" src={imgS2} alt="" />
                  </div>
                  <p className="excerpt gr-text-9 text-color-opacity mb-6">
                    Através de consulta com o médico, uma enfermeira irá definir um plano e conduzi-lo de acordo.
                  </p>
                  <Link
                    to="/#"
                    className="btn-link with-icon gr-text-9 fw-bold"
                  >
                    Saiba mais{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
                  </Link>
                </div>
              </Col>
              <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
                <div className="service-card">
                  <h3 className="card-title gr-text-7 heading-color mb-7">Consulta de Enfermagem</h3>
                  <div className="img-thumb mb-8">
                    <img className="rounded-10 w-100" src={imgS3} alt="" />
                  </div>
                  <p className="excerpt gr-text-9 text-color-opacity mb-6">
                    Uma dona de casa ou pessoa que ajuda nas tarefas domésticas pode manter a casa com tarefas domésticas.
                  </p>
                  <Link
                    to="/#"
                    className="btn-link with-icon gr-text-9 fw-bold"
                  >
                    Saiba mais{" "}
                    <i className="icon icon-tail-right fw-bold"></i>
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
export default ServicesPage;
