import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import ImgCard from '../images/portfolio/fullsize/5.jpg'

import { Carousel, Row, Col } from "react-bootstrap"

import { cards, eventos, contatos } from '../service/data'


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }


  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section" id="institucional">
          <div className="container">
            <div className="row icf-row">
              {cards.map(card => (
                <div className="icf-card">
                  <img src={card.img} alt=""/>
                  <h3 className="h4 mb-2">{card.title}</h3>
                  <p className="text-muted mb-0">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Próximas Formações</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up
                  and
                  running in no time! Choose one of our open source, free to download, and easy to use themes! No
                  strings
                  attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section> */}

        <section id="portfolio" className="page-section">
          <div className="formacao container">
              <h2 className="text-center pb-4">Eventos</h2>
                <div>
                    <div className="d-flex card-formacao">
                      {/* <img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/> */}
                      <img className="img-card" src={ImgCard}/>
                      <div className="d-flex flex-column justify-content-around">
                        {eventos.map(evento => (
                          <div>
                            <h2>{evento.titulo}</h2>
                            <h5>{evento.subtitulo}</h5>
                            <p>{evento.descricao}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
              {/* <PortfolioCarousel portfolio={portfolio} images={this.props.data.images.edges} current={this.state.modalCurrent}/> */}
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="icf-section container">
            <div>
              <h2><b>Mais de 2000 anos</b> de estudos e práticas cristãs precisam ser ensinados.</h2>
              <p>Junte-se a nós nesta missão.</p>
            </div>
              <a className="btn-contribua btn btn-light btn-xl" href="https://casadafelicidade.doareacao.com.br/" target="_BLANK">Contribua! <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Contato</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Entre em contato conosco para saber mais!</p>
              </div>
            </div>
            {/* <div className="row">
              <Formulario />
            </div> */}
            <div className="row">
              {contatos.map(contato => (
                <a 
                  className="icf-redes-sociais col-lg-3 ml-auto text-center mb-5 mb-lg-0"
                  href={contato.link}
                  target="_BLANK"
                >
                  <i className={`${contato.icon} fa-3x mb-3`}></i>
                  <div>{contato.text}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
