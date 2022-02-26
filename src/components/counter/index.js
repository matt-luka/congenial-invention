import React from 'react'
import CountUp from 'react-countup'
import handleViewport from 'react-in-viewport'
import styled, { keyframes, css } from 'styled-components'
class Counter_Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false,
            inViewport: false,
            animation_complete: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport, value: this.props.state})
            setTimeout(() => { 
                this.setState({start: true, animation_complete: true})
            }
            , this.props.delay);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { value, symbol} = this.props

        const Animation = keyframes`
            0%  {color: #9aa5ff;}
            10% {color: #d89aff;}
            20% {color: #ff9afa;}
            30% {color: #ff9ac4;}
            40%  {color: #9aa5ff;}
            50% {color: #d89aff;}
            60% {color: #ff9afa;}
            70% {color: #ff9ac4;}
            80%  {color: #9aa5ff;}
            90% {color: #d89aff;}
            100% {color: #ff9afa;}
        `
        const Symbol = styled.span`
            animation: ${this.props.animation ? css`${Animation} 10s infinite alternate` : `none`};
        `

        const CounterContainer = styled.div`
        
        `
        
        return (
            <CounterContainer className="counter">
                <CountUp className="value" start={0} end={this.state.start === true ? value : 0} duration={this.props.duration ? this.props.duration : 1}/>
                <Symbol className="symbol">{symbol}</Symbol>
                {this.text()}
            </CounterContainer>
        )
        
    }

    text() {

        if (this.props.text) {
            const Text = styled.span`
        
            `
            return (
                <div>
                    <Text className="text">{this.props.text}</Text>
                </div>
            )
        }
    }
}

const Counter = handleViewport(Counter_Component);

export default Counter