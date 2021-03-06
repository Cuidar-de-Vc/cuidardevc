import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div className="footer-section bg-blackish-blue dark-mode-texts py-9 ">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="3" md="4">
              <div className="footer-logo text-center text-md-left mb-7 mb-md-0">
                <Logo
                  white={gContext.footer.theme === "dark"}
                  className="mx-auto mx-md-0"
                />
                <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                  <li className="me-2">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </Link>
                  </li>
                  <li className="me-2">
                    <Link to="/" className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <ul className="footer-links gr-text-11 py-lg-7 list-unstyled mb-0 d-xs-flex align-items-center justify-content-around justify-content-md-end flex-wrap">
                <li className="ms-md-12 text-center">
                  <Link
                    to="/sobre"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li className="ms-md-12 text-center">
                  <Link
                    to="/servicos"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Serviços
                  </Link>
                </li>
                <li className="ms-md-12 text-center">
                  <Link
                    to="/contato"
                    className="gr-text-color gr-hover-text-blue fw-bold "
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
