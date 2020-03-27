import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Formulario from "../components/formulario"

import escola from '../images/escola.jpg'
import familia from '../images/familia.jpeg'
import formacoes from '../images/formacoes.jpg'

const cards = [
  {
    title: 'Educação Católica',
    description: 'Adaptamos os melhores métodos pedagógicos para que o processo educacional seja um verdadeiro caminho de intimidade com Nosso Senhor Jesus Cristo.',
    img: escola
  },
  {
    title: 'Formações',
    description: 'Aprenda princípios e práticas educacionais que formaram grandes mestres da sabedoria e da espiritualidade.',
    img: formacoes
  },
  {
    title: 'Aconselhamento Familiar',
    description: 'Orientação e aconselhamento para que sua família possa desenvolver plenamente sua vocação como igreja doméstica.',
    img: familia
  },
]

const portfolio = [
  {
    id: 0,
    img_path: 'img/portfolio/fullsize/1.jpg',
  },
  {
    id: 1,
    img_path: 'img/portfolio/fullsize/2.jpg',
  },
  {
    id: 2,
    img_path: 'img/portfolio/fullsize/3.jpg',
  },
  {
    id: 3,
    img_path: 'img/portfolio/fullsize/4.jpg',
  },
  {
    id: 4,
    img_path: 'img/portfolio/fullsize/5.jpg',
  },
  {
    id: 5,
    img_path: 'img/portfolio/fullsize/6.jpg',
  },
]

const contatos = [
  {
    icon: 'fab fa-whatsapp',
    text: '(11) 95342-8533',
    link: `https://api.whatsapp.com/send?phone=5511953428533`
  },
  {
    icon: 'far fa-envelope',
    text: 'escolacasadafelicidade@gmail.com',
    link: 'mailto:escolacasadafelicidade@gmail.com'
  },
  {
    icon: 'fab fa-instagram',
    text: '@institutocasadafelicidade',
    link: 'https://www.instagram.com/institutocasadafelicidade/'
  },
  {
    icon: 'fab fa-facebook',
    text: 'institutocasadafelicidade',
    link: 'https://www.facebook.com/institutocasadafelicidade/'
  }
]


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

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              {portfolio.map(imagem => (
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href={imagem.img_path} onClick={this.handlePortfolioClick.bind(this, imagem.id)}>
                    <Img fluid={this.props.data.images.edges[imagem.id].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="icf-section container">
            <div>
              <h2>Mais de 2000 anos de estudos e práticas cristãs precisam ser ensinados.</h2>
              <p>Junte-se a nós nesta missão.</p>
            </div>
              <a className="btn btn-light btn-xl" href="#">Contribua!</a>
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
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
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
