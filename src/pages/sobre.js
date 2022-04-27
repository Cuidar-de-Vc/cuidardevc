import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/about-banner.png";
import imgC1 from "../assets/image/inner/about-content-1.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutUsPage = () => {
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
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12 heading-color">Nossa História</h2>
                  <p className="gr-text-8 text-color-opacity mb-0 text-color-opacity">
                    Aqui você vai conhecer mais sobre a gente, entender o que nos motiva.
                  </p>
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
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pe-xl-13">
                  <h2 className="gr-text-3 heading-color mb-0">
                    Cuidamos das suas necessidades com bastante cuidado.
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pe-xl-15">
                  <p className="gr-text-8 text-color-opacity mb-7 mb-lg-10">
                    A cuidar de vc é uma empresa que foi criada em 2020 após
                    uma pesquisa inspiradora e encorajadora de consultoria para
                    home care.{" "}
                  </p>
                  <p className="gr-text-8 text-color-opacity mb-10">
                    A idéia inicial foi investir em marketing digital que hoje
                    e um meio de comunicação indispensável para divulgar a
                    venda e compra de serviços.{" "}
                  </p>
                  <p className="gr-text-8 text-color-opacity mb-0">
                    Contudo, toda criação e planejamento inicial de uma empresa
                    leva tempo para ser desenvolvida e lançada ao mercado, e
                    não foi diferente com a gente, mais depois de muita
                    insistência, hoje prestamos serviços de saúde domiciliar
                    com o intuito de levar um cuidado integral de saúde com uma
                    equipe altamente qualificada para a sociedade. 
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                  <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                    <img
                      src={imgC3}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC4}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="1200"
                      className="w-100 rounded-10"
                    />
                  </div>
                </div>
              </Col>
              <Col
                sm="8"
                lg="6"
                xl="5"
                className="offset-lg-1 offset-lg-1 offset-xl-0"
              >
                <div className="content-text">
                  <h2 className="gr-text-3 heading-color mb-7 mb-lg-11">
                    Profissionais altamente<br className="d-none d-lg-block" />{" "}
                    qualificados.
                  </h2>
                  <p className="gr-text-8 text-color-opacity mb-7 mb-lg-10">
                    Um provedor de cuidados profissional e amigável.{" "}
                  </p>
                  <p className="gr-text-8 text-color-opacity mb-0">
                    Oferecemos tendências e estratégias modernas para melhorar
                    seu atendimento e garantir que você receba um serviço
                    de alta qualidade.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <div className="section-title text-center px-md-12 mb-lg-17 mb-10">
                  <h2 className="gr-text-3 heading-color mb-7 mb-lg-8">Conheça Nossa Equipe</h2>
                  <p className="gr-text-8 text-color-opacity mb-0">
                    Estamos comprometidos em oferecer aos nossos clientes um
                    serviço de alto nível porque contamos com uma equipe
                    excepcional.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-left mb-lg-n15 mb-0">
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT1} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Márcio Sousa</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">Função que desempenha</p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT4} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Bruna Vasconcelos</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">
                      Função que desempenha
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT3} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Gildo Ninja</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">
                      Função que desempenha
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT2} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Outra Pessoa</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">
                      Função que desempenha
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutUsPage;
