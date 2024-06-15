// Style your elements here
import styled from 'styled-components/macro'

export const CustomContainer = styled.div`
background-color:white;
background-size:cover;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-image: linear-gradient(${props => props.linerColor});

`
export const CustomHeading = styled.h1``
export const CustomPara = styled.p``
export const CustomInput = styled.input`
border-width:0px;
outline: none;
margin:10px;
cursor:pointer;
`
export const CustomInputContainer = styled.div`
display:flex;
flex-direction:row;
margin-top:20px;


`
export const CustomGenrateButton = styled.button`
background-color:#00c9b7;
padding:10px;
margin:10px;
border-width:0px;
margin-top:20px;
border-radius:10px;
cursor:pointer;

`
export const CustomParaColors = styled.div`
display:flex;
flex-direction:row;
margin-top:20px;
`
export const Para = styled.p`
margin:10px;
`
export const ButtonContainer = styled.ul`
display:flex;

`
