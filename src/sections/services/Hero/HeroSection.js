import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '~components'
import Hero from './style'
import HeroTwo from './style2'
import { Images } from '~data'
export default function HeroSection(){
return(
<Hero overlay={Images.Services.heroImgOverlay} style={{backgroundImage: `url(${Images.Services.heroImg})`}}>
  <Container>
    <Row className="align-items-center justify-content-center justify-content-md-start">
      {/* Welcome content Area */}
      <Col className="col-xxl-7 col-xl-7 col-lg-9 col-md-10">
        <Hero.Content>
          <Hero.Title as="h2" fontColor="#fff">Seja bem vindo(a) <br className="d-none d-sm-block" />à Cuidar de Você</Hero.Title>
          <Hero.Text fontColor="#fff">Oferecemos um trabalho centrado no paciente<br className="d-none d-sm-block" />
            para mantê-lo seguro em sua casa.</Hero.Text>
          <HeroTwo.BtnGroup>
            <HeroTwo.Button className="btn-2 btn-torch-red text-white" as={Link} to="/">Saiba mais</HeroTwo.Button>
          </HeroTwo.BtnGroup>
        </Hero.Content>
      </Col>
      {/*/ .Welcome Content Area */}
    </Row>
  </Container>
</Hero>
)
}