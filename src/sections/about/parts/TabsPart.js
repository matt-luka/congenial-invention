import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "Sample Stats"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #9aa5ff;}
            10% {border-color: #d89aff;}
            20% {border-color: #ff9afa;}
            30% {border-color: #ff9ac4;}
            40%  {border-color: #9aa5ff;}
            50% {border-color: #d89aff;}
            60% {border-color: #ff9afa;}
            70% {border-color: #ff9ac4;}
            80%  {border-color: #9aa5ff;}
            90% {border-color: #d89aff;}
            100% {border-color: #ff9afa;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "Sample Stats" ? "active" : ""} onClick={() => this.setState({tab: "Sample Stats"})}>
                        Sample Stats
                    </TabSelector>
                    <TabSelector className={this.state.tab === "team" ? "active" : ""} onClick={() => this.setState({tab: "team"})}>
                        Team
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Timeline
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "Sample Stats" ? "block" : "none"
                    }}>
                        <Progress value={24} text="Accessories: Angel Wings" />
                        <Progress value={32} text="Background: Clouds" />
                        <Progress value={19} text="Body Pattern: Skeleton" />
                        <Progress value={14} text="Body Shape: Slime" />
			<Progress value={7} text="Buddy: Bat" />
			<Progress value={60} text="Color: Pastel Yellow" />
                        <Progress value={42} text="Eyes: Classic" />
                        <Progress value={25} text="Hat: Wizard" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "team" ? "block" : "none"
                        }}>
                        <Timeline data={{
				"Software" : {
                                    title: "Matthew Luka",
                                    institution: "Boston, MA, USA",
                                    description: "Matthew is a 21 year old student living in Boston, originally hailing from New York City. During the academic year, he is pursuing a BA in Computer Science with a minor in mathematics at Boston University. Matthew works part-time as a software engineer and business development representative for a small business in Washington, DC. He is responsible for the web, bot, and smart contract development of this project."
                                },
				"Design" : {
                                    title: "Tess Coppers",
                                    institution: "Leeds, UK",
                                    description: "Tess is a 19 year old student living in Leeds, UK. During the academic year, she is pursuing a BA in Fine Arts at Newcastle University, one of the top art programs in the United Kingdom. Tess has worked as a freelance artist for several years now, selling her original artwork on Etsy. She has hand-drawn each trait for every character and has designed nearly all branding content for this project."
                                },
				"Community" : {
                                    title: "George L",
                                    institution: "Connecticut, USA",
                                    description: "George is an 18 year old student living in Connecticut. He will be attending Princeton University starting this fall. George has worked on several NFT projects before as a moderator, helping generate several hundred sales. He will be handling the majority of community engagement/growth for this project."
                                },
				"Business" : {
                                    title: "Ryan Garcia",
                                    institution: "New York, NY, USA",
                                    description: "Ryan is a 21 year old software engineer living in New York City. He recently graduated from New York University, earning a BA/MS in Computer Science in just 3.5 years. Ryan has recently begun work as a software engineer in the financial tech industry. He will be handling marketing and budgeting for the project."
                                },
                                "Social Media" : {
                                    title: "Joey B. Robbins",
                                    institution: "New Haven, CT, USA",
                                    description: "Joey is a 21 year old student living in New Haven, Connecticut. After immigrating to the US from Nigeria when he was 18, he began university studies at Yale University on an academic scholarship. He is currently pursuing a biomedical engineering degree, and is a prominent member of New Haven's student LGBTQ+ community. He will be handling all of our social media accounts for the duration of this project."
                                }
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "February 12" :  {
                                    title: "Project Launch",
                                    institution: "Public",
                                    description: "After months of studying blockchain technology, Web 3.0, and successful NFT projects, our project officially launched on February 12th. The second phase of our launch took place on February 26th, where we released our website, permanent logos/branding, and amended our roadmap."
                                },
                                "TBD" : {
                                    title: "Key Sale",
                                    institution: "100 slots",
                                    description: "A key sale will be held in order to help fund our marketing efforts for this project. For every key you hold, your wallet will receive a free token during the public sale period. Purchasing a key will also give you access to our whitelist/pre-sale. 100% of funds raised during the key sale will go directly towards marketing."
                                },
                                "April 2 " : {
                                    title: "Pre-Sale",
                                    institution: "600 slots",
                                    description: "The pre-sale will consist of whitelisted wallets being able to purchase tokens prior to this rest of the public. To view our whitelist requirements, please join our Discord. Whitelisted members will also receive special perks and exclusive access to certain giveaways."
                                },
                                "TBD  " : {
                                    title: "Public Sale",
                                    institution: "5,299 slots",
                                    description: "The public sale will allow anyone to purchase any tokens remaining. You will be served on a first come, first served basis. Once supplies run out, minting will be closed and you will be able to purchase tokens exclusively on OpenSea."
                                },
                                "TBD    " : {
                                    title: "Metadata Reveal",
                                    institution: "Public",
                                    description: "Shortly after the public sale, the metadata for the newly minted tokens will be released. Holders will be able to view their ghost's traits and rarities soon thereafter."
                                },
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart