import styled from "styled-components"

export const Button = styled.button`
    background-color:black;
    color:white;
    text-align:center;
    width:220px;
    height:44px;
    border-radius:5px;
    padding-top:10px;
    padding-right:18px;
    padding-bottom:10px;
    padding-left:18px;
    gap:10px;
    border:none;
    border:1px solid transparent;
    &:hover{
        background-color:white;
        border:1px solid black;
        color:black;
        transition:0.3s background ease-in;
        cursor:pointer;

    }
`
export const OutlineButton = styled(Button)`
  background-color:white;
  border:1px solid black;
  color:black;
 &:hover{
        background-color:black;
        border:1px solid transparent;
        color:white;
       

    }
`