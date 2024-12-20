import React from 'react'
import { useState } from 'react'
import styled from "styled-components"
const NumberSelector = ({selectedNumber, setSelectedNumber, error,setError}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6]
  
const onclickNumberSelector = (value) =>{
    setSelectedNumber(value)
    setError("")
}
  return (
    <NumberSelecterContainer>
         <p className="error">{error}</p>
         <div>
           
        {arrNumber.map((value, i) => (
            <Box
            isSelected = {value === selectedNumber}
            key = {i}
            onClick ={() => onclickNumberSelector(value)}
            >{value}</Box>
        ))}
    </div>
    <div className='para'><p>Select Number</p></div>
    </NumberSelecterContainer>
   
  )
}

export default NumberSelector

const Box = styled.div`
display:flex;
justify-content:center;
height:72px;
width:72px;
border:1px, solid black;
display:grid;
align-items:center;
font-size:24px;
font-weight:700;
background-color:${(props) =>(props.isSelected ? "black" : "white")};
color:${(props) =>(props.isSelected ? "white" : "black")};
`

const NumberSelecterContainer =styled.div`
    div{
        display:flex;
        gap:24px;
        text-align:center;
    }
    p{
        font-size:24px;
        font-weight:700px;
    }
    .para{
        display:flex;
        justify-content:flex-end;
    }
    .error{
        color:red;
    }
`