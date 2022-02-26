import React from 'react'
import styled, { keyframes } from 'styled-components'


class ProgressBar extends React.Component {

    render() {
        const { text } = this.props

        const ProgressContainer = styled.div`
            margin-bottom: 25px;
        `
        const Text = styled.span`
            font-size: 17px;
            font-family: Poppins;
            color: #fff;
        `

        const Value = styled.span`
            font-size: 17px;
            font-family: Poppins;
            color: #fff;
            float: right;
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

        const Progress = styled.div`
            height: 5px;
            border-radius: 2.5px;
            margin-top: 10px;
            transition: 2s;
            animation: ${ColorAnimation} 10s infinite alternate;
        `


        return(
            <ProgressContainer>
                <Text>{text}</Text>
                <Value>{this.props.value}%</Value>
                <Progress style={{width: `${this.props.value}%`}}></Progress>
            </ProgressContainer>
        )
    }
}

export default ProgressBar