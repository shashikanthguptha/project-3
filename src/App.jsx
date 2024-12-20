import React from 'react'
import { Component } from 'react'
import StartGame from './components/StartGame'
import "./App.css"
import GamePlay from './components/GamePlay'


class App extends Component{
  state ={
    isGameStarted : false
  }
  onClickPlayBtn =() =>{
    this.setState(prevState => ({isGameStarted : !prevState.isGameStarted}))
  }
  render(){
    const {isGameStarted} = this.state
    return (
      <>
      {isGameStarted? <GamePlay/> : <StartGame toggle ={this.onClickPlayBtn}/>}
      </>
      
    )
  }
}


export default App
