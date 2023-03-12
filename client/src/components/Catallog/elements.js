import styled from "styled-components";
import { SectionContainer,DivContainer,Heading,Paragraph } from "../common";

export const StyledSection=styled(SectionContainer)`
justify-content: space-between;
  div:nth-of-type(2) ul{
   align-items: start;
   padding: 10px;
   max-width: 300px;
   margin: 0 auto;
   li{
      border-bottom:1px solid ${({theme})=>theme.colors.backgroundSec};
      line-height: 2;
   }
}
`
export const StyledHeading=styled(Heading)`
`
export const StyledDiv=styled(DivContainer)`
 flex-direction: column;
 justify-content: center;
 width: 100%;
 max-width: 350px;
 margin: 0 auto;
 padding: 20px 10px;
 gap: 20px;
 border-radius: 5px;
 background: ${({theme})=>theme.colors.linear};
 box-shadow: ${({theme})=>theme.shadows.prime};
`
export const StyledList=styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 height: 290px;
 overflow: auto;
`
export const StyledListItem=styled.li`
 color: ${({theme})=>theme.colors.secondary};
 transition: ease-in-out 300ms;
 &:hover{
    transform: scale(1.05);
    color: ${({theme})=>theme.colors.tertiary};
 }
`
export const StyledParagraph=styled(Paragraph)`
justify-content: center;
`