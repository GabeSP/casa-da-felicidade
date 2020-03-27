import React from "react"
import PropTypes from "prop-types"
import { Carousel, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

import "./carousel.scss"

const PortfolioCarousel = ({ images, current, portfolio }) => {
  const carouselItems = images.map((image, index) =>
    <Carousel.Item key={index}>
      {portfolio.map(img => {
        let foo = img.img_path.split('/')
        let teste = image.node.childImageSharp.fluid.src.split('/')

        if(teste[4] === foo[3]) {
          console.log('entrei')
          return (
            <Row>
              <Col lg="4">
                <figure>
                  <Img fluid={image.node.childImageSharp.fluid}/>
                  <Carousel.Caption>
                    {console.log(img.title)}
                    <h3>{img.title}</h3>
                    <p>{img.descricao}</p>
                  </Carousel.Caption>
                </figure>
              </Col>
              <Col lg="4">
                <figure>
                  TESTE
                </figure>
              </Col>
            </Row>
          )
        }
      })}
    </Carousel.Item>
  );

  return (
    <Carousel interval={3000} indicators={false} defaultActiveIndex={current} slide={true}>
      {carouselItems}
    </Carousel>
  );
}

PortfolioCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel