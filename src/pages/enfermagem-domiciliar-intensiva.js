import React from "react";
import { Link } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/sv04-banner.png";

const IntensiveHomeNursing = () => {
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
                    Assistência Acompanhada Intensiva
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13 text-color-opacity">Cuidado Domicilar</p>
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
                    Os pacientes classificados com cuidados de média e alta
                    complexidade, como acamados, traquiostomizados, em uso de
                    dieta por gastrostomia e cuidados paliativos recebem um
                    acompanhamento de saúde dos tecnicos de enfermagem em regime
                    de plantão de 12 ate 24h/dia.
                  </p>
                  <p className="gr-text-9 text-color-opacity mb-9">
                    O profissional técnico de enfermagem acompanha e realiza
                    procedimentos assistenciais em domicílio como curativos,
                    administração de medicamentos (oral e injetável),
                    mantém o cuidado de sondas e cateteres, realiza a coleta
                    para exames de urina e promove as medidas de conforto diante
                    da situação clínica do paciente, esses processos trazem
                    melhoria na qualidade de vida e bem-estar.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Demais atividades prestadas
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Auxiliar o banho do paciente;
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Realizar os cuidados pós-operatório;
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Colocar e trocar bolsas de colostomia;
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Realizar lavagem intestinal;
                    </li>
                    <li className="mt-7 gr-text-9 text-color-opacity">
                      <i
                        className="rounded-circle bg-opposite d-inline-block me-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Passar sonda vesical, sonda nasogástrica e enteral (privativo do enfermeiro).
                    </li>
                  </ul>
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
export default IntensiveHomeNursing;
