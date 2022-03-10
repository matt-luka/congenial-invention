import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'

class ServicesOne extends React.Component {

    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `
        const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `

        const ColorAnimation = keyframes`
            0%  {background: #9aa5ff;}
            10% {background: #d89aff;}
            20% {background: #ff9afa;}
            30% {background: #ff9ac4;}
            40%  {background: #9aa5ff;}
            50% {background: #d89aff;}
            60% {background: #ff9afa;}
            70% {background: #ff9ac4;}
            80%  {background: #9aa5ff;}
            90% {background: #d89aff;}
            100% {background: #ff9afa;}
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
        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                animation: ${AnimatedShadow} 10s infinite alternate;
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #9aa5ff;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            width: 120px;
            height: 120px;
            margin: 0 auto 25px auto;
            background-color: #fff;
            border-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #9aa5ff, #d89aff, #ff9afa, #ff9ac4, #9aa5ff, #d89aff, #ff9afa, #ff9ac4);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                position: relative;
                bottom: 2.5px;
                animation: ${ColorAnimation} 10s infinite alternate;
            }
        `

        return(
            <Section id="benefits">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Benefits" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.mobile.childImageSharp.fluid.src} alt="Community Wallet" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Community Wallet
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Community funds, community control
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Portion of sales profits will be deposited
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Publicly visible address
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.web.childImageSharp.fluid.src} alt="DAO" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            DAO
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Decentralized Autonomous Organization
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Everyone's in charge
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Community vote for all major decision-making
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.email.childImageSharp.fluid.src} alt="Staking Options" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Staking Options
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Holding tokens will generate passive income
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Will be implemented 1 month after public sale
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Transferring tokens between users resets the holding period
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.seo.childImageSharp.fluid.src} alt="Charitable Donations" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Charitable Donations
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Don't let species become ghosts; help save the planet
                                            </ServiceListElement>
                                            <ServiceListElement>
						                        Over 20% of our sales will be donated to charities devoted to protecting endangered species
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Each token held that contains a non-null "buddy" attribute will result in additional donations
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.network.childImageSharp.fluid.src} alt="Profit Pooling" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Profit Pooling
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                When we make money, you make money
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Percentage of post-mint sales will be distributed
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                The more tokens you hold, the higher your cut
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.ui.childImageSharp.fluid.src} alt="Metaverse Land Acquisition" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Metaverse Land Acquisition
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Ethereum from the community wallet will be used to purchase Metaverse land
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Eventually, tokens will act as a pass towards access to this plot
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    TBA: The Graveyard, a Metaverse lounge
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/seo2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/email.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/sketch.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/network.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        web,
        mobile,
        seo,
        email,
        ui,
        network}) => <ServicesOne  
        background={background}
        web={web}
        mobile={mobile}
        seo={seo}
        email={email}
        ui={ui}
        network={network}
        {...props} />}
    />
  )