import React from "react";
import { Link } from "gatsby";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const SpecializedCare = () => {
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
                    Atendimento Especializado
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
                    Conforme a necessidade, os pacientes receberão cuidados de
                    reabilitação de funções especificas comprometidas por
                    determinada condição clinica de doênça com o fisioterapeuta,
                    psicologo e fonoaudiólogo.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Fisioterapia
                  </h3>
                  <p className="gr-text-9 text-color-opacity mb-0">
                    A fisioterapia no atendimento domiciliar é caracterizada
                    como uma atividade que utiliza métodos de reabilitação
                    manual e convencional para tratar lesões e traumas mecânicos
                    causados por doenças neurológicas ou acidentes. Esses
                    cuidados permitem uma avaliação profissional quanto a
                    realidade e dificuldades do mesmo.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Fonoaudiologia
                  </h3>
                  <p className="gr-text-9 text-color-opacity mb-0">
                    É a especialidade que trabalha com os aspectos da fala,
                    deglutição (oral) e escrita. Pacientes com problemas de
                    deglutição (disfagia), comunicação (expressão e compreensão)
                    com lesão neurológica podem ter dificuldades na sua
                    integração social e profissional.
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
export default SpecializedCare;
