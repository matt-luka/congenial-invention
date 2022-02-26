import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'
import ContactPersonalForm from './parts/ContactPersonalForm.js'

class ContactPersonal extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 100px 0;
        `

        const FormRow = styled(Row)`
           background-color: #111;
        `

        const ContactCol = styled(Col)`
            min-height: 600px;
            max-height: 600px;
            padding: 0;
            display: flex;
            align-items: center;
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

        const Gradient = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            background: linear-gradient(120deg, #9aa5ff, #d89aff, #ff9afa, #ff9ac4, #9aa5ff, #d89aff, #ff9afa, #ff9ac4);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
        `




        const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
        `

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background: linear-gradient(120deg, #9aa5ff, #d89aff, #ff9afa, #ff9ac4, #9aa5ff, #d89aff, #ff9afa, #ff9ac4);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            border-radius: 150px;
            transition: .5s;
        `
        
        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #9aa5ff;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `
        

        return(
            <Section id="contact">
                <Container>
                  <AnimationContainer animation="fadeIn">
                    <FormRow>
                      <ContactCol md={6}>
			<img src="https://cdn.discordapp.com/attachments/358744677836521484/947246273172496394/whiteghostlogo.png"/>
                      </ContactCol>
                      <ContactCol md={6}>
                        <Map  
                          title="map"
                          src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=1%20Back%20Bay%2C%20Boston%2C%20USA&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
                      </ContactCol>
                    </FormRow>
                  </AnimationContainer>
                  <IconRow>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={500}>
                          <InfoPart>
                            <IconContainer>
                                <Icon src={this.props.emailIcon.childImageSharp.fluid.src} alt="email" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Business Inquiries
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="https://www.instagram.com/spookyboosnft/">
                                  Instagram
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1000}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.phoneIcon.childImageSharp.fluid.src} alt="discord" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Discord
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="https://discord.gg/F9MjuDcE4Y">
                                  Join Here
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1500}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.mapIcon.childImageSharp.fluid.src} alt="map" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Location
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink target="_blank" href="https://maps.google.com/maps?q=back+bay+boston+usa&client=opera&hs=RXB&sxsrf=APq-WBtGVeRNdIx_p2O1L2LgvNZi8rOt9A:1645843206915&uact=5&gs_lcp=Cgdnd3Mtd2l6EAMyAggmMgIIJjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjICCCYyAggmMgUIABCGAzoECCMQJzoECAAQQzoHCC4Q1AIQQzoECC4QQzoQCC4QsQMQgwEQxwEQowIQQzoLCC4QxwEQrwEQkQI6CgguEMcBEK8BEEM6DgguEIAEELEDEMcBEKMCOggIABDJAxCRAjoFCAAQkgM6BQgAEJECOhEILhCABBCxAxDHARDRAxDUAjoLCC4QgAQQsQMQ1AI6DgguEIAEELEDEIMBENQCOgcILhCxAxBDOhAILhCxAxCDARDHARCvARBDOgUIABCABDoOCC4QgAQQsQMQxwEQrwE6EQguEIAEELEDEIMBEMcBEK8BOggIABCABBDJAzoLCC4QgAQQxwEQrwE6DQguEIAEEIcCELEDEBQ6CAguEIAEELEDOgUILhCABEoECEEYAEoECEYYAFAAWKwZYLMaaABwAXgAgAFtiAGpDJIBBDE1LjSYAQCgAQHAAQE&um=1&ie=UTF-8&sa=X&ved=2ahUKEwizx7iXrJz2AhVmkYkEHXz0ACkQ_AUoAXoECAIQAw">
                                  Back Bay, Boston, Massachusetts, USA
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                  </IconRow>
                </Container>
            </Section>
        )
    }

}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email2.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/map.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
    render={({ 
      emailIcon, 
      mapIcon, 
      phoneIcon}) => <ContactPersonal  
      emailIcon={emailIcon} 
      mapIcon={mapIcon} 
      phoneIcon={phoneIcon}
      {...props} />}
  />
)