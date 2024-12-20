import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RoleDice from './RoleDice'
import {useState} from 'react'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] =useState(0)
  const [selectedNumber, setSelectedNumber] =useState() 
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [ShowRules, setShowRules] = useState(false)
  
  const generateRandomnumber = (min, max) => {
    console.log(Math.floor(Math.random()*(max-min)+min))
    return Math.floor(Math.random()*(max-min)+min);
}
const roleDice =() =>{
  if (!selectedNumber){
    setError("You have not selected any number")
    return;
  }
  setError("")
    const randomNumber = generateRandomnumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
}

const resetScore =()=>{
  setScore(0)
}
  return (
    <MainContainer>
      <main>
    <TotalScore score = {score}/>
    <NumberSelector
    error = {error}
    setError = {setError}
     selectedNumber = {selectedNumber}
    setSelectedNumber = {setSelectedNumber}/>
 </main>
 <RoleDice currentDice = {currentDice} roleDice = {roleDice}/>
 <div className="btns">
  <OutlineButton onClick={resetScore}>Reset</OutlineButton>
  <Button onClick={() => setShowRules((prev) => !prev)}>{
  ShowRules?"Hide":"Show"
  } Rules</Button>
 </div>
 {ShowRules &&<Rules/>}
 </MainContainer>
    
  )
}

export default GamePlay
const MainContainer = styled.div`
  main{
    display:flex;
    justify-content:space-between;
  }
  .btns{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
  }
`
