import { Link } from '~components'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '~data'
import Footer from "./style"
export default function FooterFive(){
return(
    <Footer backgroundColor="#f3f4f6">
    <Container>
        <Footer.Box pb="25px">
        <Row className="justify-content-center justify-content-lg-between">
            <Col xs="12">
            <Footer.Logo>
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                    <Link  to="#">
                        <img src={Images.FooterSix.LogoBlack} alt="logo" />
                    </Link>
                </Footer.Box>
            </Footer.Logo>
            
            <Footer.Text as="p">Atendimento domiciliar de qualidade e serviço de enfermagem particular</Footer.Text>
            <Footer.Menu>
                <Footer.MenuItems><a href="#">Homepage</a></Footer.MenuItems>
                <Footer.MenuItems> <a href="#">Sobre Nós</a> </Footer.MenuItems>
                <Footer.MenuItems><a href="#">Serviços</a></Footer.MenuItems>
                <Footer.MenuItems><a href="#">Contato</a>
                </Footer.MenuItems>
            </Footer.Menu>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.SocialShare>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-facebook-square" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-twitter" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-instagram" />
                </a>
            </Footer.SocialShareItem>
            <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-linkedin" />
                </a>
            </Footer.SocialShareItem>
        </Footer.SocialShare>
        <Footer.CopyrightText>© 2022 Cuidar de Você por Lauriel Mesquita. Todos os Direitos Reservados</Footer.CopyrightText>
        </Footer.Copyright>
    </Container>
    </Footer>
)
}