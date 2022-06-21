import React from "react";
import { Link } from "gatsby";

import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/sv05-banner.png";

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
                    Conforme a necessidade, os pacientes receberão cuidados de
                    reabilitação de funções especificas comprometidas por
                    determinada condição clinica de doênça com o fisioterapeuta,
                    psicologo e fonoaudiólogo.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Fisioterapeuta
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
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Nutricionista
                  </h3>
                  <p className="gr-text-9 text-color-opacity mb-9">
                    É o atendimento nutricional-dietético direcionado para
                    pessoas em terapia nutricional domiciliar e hospitalar.
                    Possui sua definição embasada na nutrição clínica ao paciente
                    em domicílio com minimização de custos assistenciais que
                    objetiva recuperar ou manter o maior nível de saúde
                    complementar, funcionalidade e comodidade.
                  </p>
                  <p className="gr-text-9 text-color-opacity mb-0">Os tipos de assistência nutricional podem incluir uma dieta
                    administrada por via oral, enteral e/ou parenteral.
                    A indicação da terapia nutricional dependerá da condição
                    clínica para melhor absorção do paciente. A terapia enteral
                    domiciliar é semelhante a indicação que é dada na hospitalar,
                    mais a redução dos riscos de infecção são muito menores na
                    assistência em domicílio. Os casos mais indicados para
                    terapia enteral são distúrbios de deglutição associada com
                    fraturas, doenças neurológicas, câncer, gastroparesia e
                    síndrome de má absorção.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 heading-color fw-bold mb-9">
                    Psicologia
                  </h3>
                  <p className="gr-text-9 text-color-opacity mb-0">
                    O Profissional de psicologia possui a sua postura diferenciada
                    de escuta, que, dentro da equipe, pode ajudar na ampliação
                    acerca da percepção de um problema específico suscitado pela
                    família; fazer o papel de intermediação entre a equipe e a família;
                    e incentivar a reflexão técnica intermembros da equipe.
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
