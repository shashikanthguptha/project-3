import React from 'react'
import styled from "styled-components"
const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game?</h2>
        <div className='text'>
            <p>
                Select any number
            </p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
            <p>If you get wrong guess then 2 points will be dedcuted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
background-color:#fbf1f1;
padding:20px;
max-width:800px;
margin:0 auto;

margin-top:140px;
border-radius:10px;
h2{
    font-size:24px;
    font-family:bold;
}
.text{
    margin-top:24px;
}
`