import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import Cta from './style'
export default function CtaSection(){
return(
<Cta>
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-7 col-lg-10 col-md-11 text-center">
        <Cta.Box>
          <Cta.Title mb="35px">Serviços de saúde domiciliar para sua família</Cta.Title>
          <Cta.Text fonColor="rgba(38, 39, 41, 0.7)">A cuidar de vc é uma empresa de Home Care que foi criada
          com o próposito encorajador de impactar a sua vida.</Cta.Text>
          <Cta.Box mt="35px">
            <Cta.Button as={Link} to="/" className="btn btn-bittersweet text-white box-shadow-1"><i className="fa fa-envelope" />Contate-nos</Cta.Button>
            <Cta.Button as={Link} to="/" className="btn btn-niagara text-white box-shadow-2"><i className="fa fa-arrow-circle-right" />Nossa Empresa</Cta.Button>
          </Cta.Box>
        </Cta.Box>
      </Col>
    </Row>
  </Container>
</Cta>
)
}