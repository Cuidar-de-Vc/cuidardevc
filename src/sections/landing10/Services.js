import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";

import imgS1 from "../../assets/image/l3/jpg/l3-service-img11.jpg";
import imgS2 from "../../assets/image/l3/jpg/l3-service-img22.jpg";
import imgS3 from "../../assets/image/l3/jpg/l3-service-img33.jpg";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section bg-default-2 pt-12 py-lg-23">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-15">
                <h2 className="title gr-text-4 mb-6 heading-color">
                  Conheça Nosso Serviços
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0 text-color-opacity">
                  Nos esforçamos para mudar a forma como os serviços de saúde são oferecidos,
                  a fim de melhor atender nossos pacientes.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 heading-color mb-7">Cuidados Domésticos Diários</h3>
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
                <h3 className="card-title gr-text-7 heading-color mb-7">Cuidados Domiciliares por Hora</h3>
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
                <h3 className="card-title gr-text-7 heading-color mb-7">Cuidados Domiciliares de Repouso</h3>
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
    </>
  );
};

export default Services;
