import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

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
                  Bem vindos à Cuidar de Você
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0 text-color-opacity">
                  A cuidar de vc é uma empresa que foi criada em 2020 após uma
                  pesquisa inspiradora e encorajadora de consultoria para home
                  care com a finalidade de impactar a sua vida.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" className="mb-13 mb-lg-0">
              <div className="hero-btns d-flex flex-column flex-md-row justify-content-md-center">
                  <Button className="btn btn-primary with-icon gr-hover-y mb-6 mb-md-0 me-md-7">
                    Conheça a gente
                    <i className="fas fa-arrow-right gr-text-11"></i>
                  </Button>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
