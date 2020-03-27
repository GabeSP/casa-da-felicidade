import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import Img from '../images/logo-escola.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
      {/* HOME
PRINCÍPIOS
FORMAÇÕES
EDUCAÇÃO
CONTATO
QUEM SOMOS */}
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>  <img src={Img} alt="Casa da Felicidade" /></a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link href="/">Home</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Eventos</Nav.Link>
                  </li>
                  <li className="nav-item doacao">
                    <Nav.Link href="https://casadafelicidade.doareacao.com.br/" target="_BLANK">Seja um benfeitor</Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Portfolio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li> */}
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Instituto <br />Casa da Felicidade</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Aprenda conosco princípios e práticas educacionais que formaram grandes mestres da sabedoria e da espiritualidade.</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#institucional" onClick={Scroller.handleAnchorScroll}>Conheça</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
