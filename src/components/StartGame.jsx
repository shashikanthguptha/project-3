import React from 'react'
import styled from "styled-components"
import { Button } from './styled/Button'

const StartGame = (props) => {
    const {toggle} = props
  return (
    <Container>
        <img src="/images/dices 1.png" className='dice-img'/>
        <div className="frst-div">
            <h1>DICE GAME</h1>
           <div className='btn-container'><Button onClick={toggle}>Play Now</Button></div> 
        </div>
    </Container>
  )
}

export default StartGame
const Container=styled.div`
    max-width:1180px;
    font-family:"Roboto";
    display:flex;
    align-items:center;
    h1{
        margin:0px;
    }

`


