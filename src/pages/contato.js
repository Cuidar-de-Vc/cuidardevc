import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
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
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">Contate-Nos</h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    Entre em contato conosco para obter melhores informações.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-33 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="mb-9">
                <Row>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary me-7">
                        <i className="icon icon-phone-2"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5 heading-color">Ligue para nós</h3>
                        <p className="gr-text-7 mb-0 text-color-opacity">
                          (86) 98180-3830 <br />
                          (86) 98892-8081
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary me-7">
                        <i className="icon icon-email-83"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5 heading-color">Envie um email</h3>
                        <p className="gr-text-7 mb-0 text-color-opacity">
                          cuidardevchomecare@gmail.com
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary me-7">
                        <i className="icon icon-pin-3-2"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5 heading-color">Visite-Nos</h3>
                        <p className="gr-text-7 mb-0 text-color-opacity">
                          Endereço físico,
                          <br />
                          Teresina - PI
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
