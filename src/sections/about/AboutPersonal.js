import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import RevealContent from 'components/reveal-content'
import { StaticQuery, graphql } from 'gatsby'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import TabsPart from 'sections/about/parts/TabsPart'

class AboutPersonal extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            padding-top: 50px;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            @media (max-width: 767px) {
                padding: 80px 20px;
            }
            @media (max-width: 500px) {
                padding: 0 20px;
            }
        `

        const CounterRow = styled(Row)`
            margin-top: 100px;
            background-color: #000;
            padding: 100px 0;
            @media (max-width: 500px) {
                margin-top: 0;
            }

        `
        
        const AboutContainer = styled(Container)`
            padding: 100px 0;
            @media (max-width: 500px) {
                padding: 50px 0;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            text-align: center;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #9aa5ff;
                position: absolute;
                font-size: 39px;
                top: -28px;
                @media (max-width: 500px) {
                    top: 0;
                }
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: baseline;
            justify-content: center;
            @media (max-width: 500px) {
                margin-bottom: 50px;
            }
        `


        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(154, 165, 255, .5);}
            10%  {box-shadow: 0 28px 60px rgba(216, 154, 255, .5);}
            20%  {box-shadow: 0 28px 60px rgba(255, 154, 250, .5);}
            30%  {box-shadow: 0 28px 60px rgba(255, 154, 196, .5);}
            40%  {box-shadow: 0 28px 60px rgba(154, 165, 255, .5);}
            50%  {box-shadow: 0 28px 60px rgba(216, 154, 255, .5);}
            60%  {box-shadow: 0 28px 60px rgba(255, 154, 250, .5);}
            70%  {box-shadow: 0 28px 60px rgba(255, 154, 196, .5);}
            80% {box-shadow: 0 28px 60px rgba(154, 165, 255, .5);}
            90% {box-shadow: 0 28px 60px rgba(216, 154, 255, .5);}
            100% {box-shadow: 0 28px 60px rgba(255, 154, 250, .5);}
        `
        const ImageContainer = styled.div`
            border-radius: 20px;
            overflow: hidden;
            animation: ${AnimatedShadow} 10s infinite alternate;
            @media (max-width: 767px) {
                margin-bottom: 50px;
            }
        `

        const Image = styled.img`
            max-width: 400px;
            @media (max-width: 767px) {
                max-width: 200px;
            }
            @media (max-width: 1400px) {
                max-width: 280px;
            }
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #9aa5ff;
            margin-bottom: 20px;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
            line-height: 50px;
        `

        const Text = styled.p`
            font-size: 12px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return(
            <Section id="about">
                <AboutContainer>
                    <Row>
                        <LeftCol md={6}>
                            <AnimationContainer animation="fadeIn">
                                <ImageContainer>
                                    <RevealContent delay={500}>
                                        <Image src={this.props.image.childImageSharp.fluid.src} alt="about" />
                                    </RevealContent>
                                </ImageContainer>
                            </AnimationContainer>
                        </LeftCol>
                        <Col md={6}>
                            <AnimationContainer animation="fadeIn">
                                <Heading>About Us</Heading>
                                <Separator />
                                <Text>
                                    Spooky Boo Club is an upcoming NFT collection of 5,999 unique ghosts living on the Ethereum blockchain. 
                                    We want to make the world a better place in our own way. With the emergence of Web 3.0, the possibilities 
                                    for accomplishing this have become increasingly endless. Each purchase of our token will result in a substantial portion of the profits being donated to
                                    charities specializing in the protection of endangered species. While we love our ghosts, don't let the species around us become ghosts too! Protecting our planet and those we share it with should be a mission that we approach as a global 
                                    community. Additionally, holders are provided with exclusive passive income streams via staking and profit pooling options built into our tokens. Find out more
				    by joining our Discord and following us on social media.
                                </Text>
                                <TabsPart />
                            </AnimationContainer>
                        </Col>
                    </Row>
                </AboutContainer>
                <CounterRow>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={5999} duration={3} delay={1000} text="Unique Tokens" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={150} duration={3} delay={1000} symbol="+" text="Unique Features" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={650} duration={3} delay={1000} symbol="+" text="Discord Members" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                            <Col md={3}>
                                <AnimationContainer animation="fadeIn" delay={1000}>
                                    <CounterComponent>
                                        <Counter value={3000} duration={3} delay={1000} symbol="+" text="Social Media Followers" animation={true} />
                                    </CounterComponent>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </CounterRow>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        image: file(relativePath: {eq: "about-me.png"}) {
          childImageSharp {
            fluid(maxHeight: 2000) {
              src
            }
          }
        }
      }
      `}
      render={({ image }) => <AboutPersonal  image={image} {...props} />}
    />
  )
