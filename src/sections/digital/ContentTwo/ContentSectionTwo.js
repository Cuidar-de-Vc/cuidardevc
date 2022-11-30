import React from 'react'
import { StaticImage as Img} from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap'
import Content from './style'
 
export default function ContentSectionTwo({...rest}){
return(
<Content {...rest}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-xl-6 col-lg-7 col-md-8 col-xs-9 order-2 order-lg-1">
        {/* Section Title */}
        <Content.Box>
          <Content.Subtitle fontColor="#fd346e" as="h4">Nossa Missão</Content.Subtitle>
          <Content.Title as="h2">Oferecer cuidados de saúde para crianças</Content.Title>
          <Content.Text>idosos e/ou portadores de doenças crônicas no<br className="d-none d-md-block" />
          conforto do seu lar ou ambiente hospitalar<br className="d-none d-md-block" />
          preservando os princípios da bioética, </Content.Text>
          <Content.Button pl="15px" pr="15px" sizeY="56px" sizeX="168px" className="btn" href="#" mt="40px">Saiba mais</Content.Button>
        </Content.Box>
      </Col>
      <Col xs="12" className="col-xl-6 col-lg-5 col-sm-8 col-xs-10 order-1 order-lg-2">
        <Content.Images>
          <Content.ImageOne>
          <Content.ImageOneInner>
            <Img src="../../../assets/image/home-digital-agency/1.png" alt="Content" layout="fullWidth" placeholder="blurred"/>
          </Content.ImageOneInner>
          </Content.ImageOne>
          <Content.ImageTwo>
          <Content.ImageTwoInner>
            <Img src="../../../assets/image/home-digital-agency/2.png" alt="Content" layout="fullWidth" placeholder="blurred"/>
          </Content.ImageTwoInner>
          </Content.ImageTwo>
        </Content.Images>
      </Col>
    </Row>
  </Container>
</Content>

)
}