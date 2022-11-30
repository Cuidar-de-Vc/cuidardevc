import { StaticImage as Img} from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Content from './style'
 
export default function ContentSectionOne(){
return(
<Content>
  <Container>
    <Content.InnerBlock className="border-bottom">
      <Row className="justify-content-center">
        {/* about-us Content */}
        <Col xs="12" className="col-lg-7 col-md-6 col-xs-10">
          <Content.Box>
            <Content.Subtitle as="h6" mb="40px" fontColor="#fd346e">Sobre Nós</Content.Subtitle>
            <Content.Title as="h2" mb="30px" mbXL="50px">Nosso trabalho descreve porque somos os melhores</Content.Title>
            <Content.ImageOne mb="40px">
              <Img src="../../../assets/image/home-digital-agency/content-l7-1-1.png" alt="About" placeholder="blurred" layout="fullWidth"/>
            </Content.ImageOne>
          </Content.Box>
        </Col>
        {/*/ .about-us Content */}
        <Col xs="12" className="col-lg-4 offset-xl-1 col-md-6 col-xs-10">
            <Content.Subtitle as="h6" mb="30px" fontColor="#fd346e">Nosso Objetivo</Content.Subtitle>
            <Content.Text mb="40px" mbXL="60px">A idéia inicial foi investir em marketing digital que hoje e um meio de comunicação indispensável para divulgar a venda e compra de serviços.</Content.Text>
            <Content.ImageTwo mb="40px">
              <Img src="../../../assets/image/home-digital-agency/content-l7-2-2.png" alt="About" placeholder="blurred" layout="fullWidth"/>
            </Content.ImageTwo>
            <Content.Text mb="30px" ptXL="30px">Contudo, toda criação e planejamento inicial de uma empresa leva tempo para
            ser desenvolvida e lançada ao mercado, e não foi diferente com a gente, hoje prestamos serviços de saúde domiciliar
            com o intuito de levar um cuidado integral de saúde para a sociedade.</Content.Text>
        </Col>
      </Row>
    </Content.InnerBlock>
  </Container>
</Content>

)
}