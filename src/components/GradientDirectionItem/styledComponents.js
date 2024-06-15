// Style your elements here

import styled from 'styled-components/macro'

export const CoustomContainer = styled.li`
display:flex;
list-style-type: none;


`
export const CustomButton = styled.button`
margin:10px;
border-width:0px;
padding:10px;
border-radius:6px;
cursor:pointer;
opacity: ${props => (props.active ? 1 : 0.5)};
`
