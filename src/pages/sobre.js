import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgT1 from "../assets/image/inner/team-image-11.png";
import imgT4 from "../assets/image/inner/team-image-12.png";

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
                    Aqui você vai conhecer mais sobre a gente e entender o que nos motiva.
                  </p>
                </div>
              </Col>
              {/* <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="about-content justify-content-center pt-lg-28 pt-13 pb-13 pb-lg-25">
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
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">
                    Nossa Missão
                  </h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    Oferecer cuidados de saúde para crianças, idosos e/ou portadores de doenças crônicas no conforto
                    do seu lar ou ambiente hospitalar preservando os princípios
                    da bioética, respeitando todos os aspectos biopsicosociais
                    envolvidos da pessoa e família durante todo o processo de
                    saúde/doença, nos comprometendo com a saúde e bem-estar dos
                    nossos clientes para alcançar a promoção, prevenção,
                    recuperação e reabilitação de saúde.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-1">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">
                    Nossa Visão
                  </h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    Ser uma empresa referência de assistência em saúde domiciliar
                    trazendo como ênfase a qualidade de vida e bem estar dos
                    nossos clientes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">
                    Nossos Valores
                  </h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    Cuidado holístico, inovação, integridade, responsabilidade
                    social, amor pelo próximo, colaboração, qualidade dos serviços prestados.
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
            <Row className="justify-content-center mb-lg-n15 mb-0">
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT4} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Márcio Fernando</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">Enfermeiro - COREN-PI N° 567.797.
                      Especialista em Oncologia e Urgência e Emergência (Coordenador Geral e Supervisor Técnico)
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT1} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 heading-color mb-2">Bruna Vasconcelos</h3>
                    <p className="gr-text-9 text-color-opacity mb-0 line-height-1">
                      Fisioterapeuta - CREFITO N° 28793 Especialista em Traumato/Ortopedia e Dermato/Funcional
                      (Coordenadora Adjunta e Supervisora Interdisciplinar)
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
