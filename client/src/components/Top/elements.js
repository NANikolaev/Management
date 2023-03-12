import styled from "styled-components";

import { DivContainer,Heading } from "../common";

export const StyledDiv=styled(DivContainer)`
 justify-content: center;
 flex-direction: column;
 width: 100%;
 max-width: 450px;
 padding:20px 10px;
 gap: 20px;
 border: 1px solid black;
 border-radius: 5px;
 box-shadow: ${({theme})=>theme.shadows.prime};
 a{transition: transform 0.4s ease-in-out;}
 a:hover{
  transform: scale(1.05);
  color: ${({theme})=>theme.colors.tertiary};
 }
`
export const StyledHeading=styled(Heading)`
 text-transform: uppercase;
`
export const StyledList=styled.ul`
display: flex;
flex-direction: column;
width: 100%;
max-width: 300px;
margin: 0 auto;
gap: 20px;
`
export const StyledListItem=styled.li`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px;
 font-weight: 600;
 width: 100%;
 gap:10px;
 color: ${({theme})=>theme.colors.orange};
`
export const StyledSpan=styled.span`
 font-size: 20px;
 font-weight: 600;
 color: ${({theme})=>theme.colors.prime};
 text-shadow: ${({theme})=>theme.shadows.text};;
`