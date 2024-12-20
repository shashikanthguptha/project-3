import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <ScoreContainer >
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    max-width : 150px;
    text-align:center;
    gap:3px;
    max-height:150px;
    h1{
        font-size: 100px;
        font-family:"Poppins";
        font-weight:500;
        line-height:100px;
        margin-bottom:0px;

    }

    p{
        font-size:24px;
        font-family:"Poppins";
        font-weight:500;
        margin-top:0px;

    }
`