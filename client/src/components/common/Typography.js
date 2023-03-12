import styled from "styled-components";

export const Heading=styled.h2`
text-align: center;
color: ${({theme})=>theme.colors.prime};
font-size: 20px;
font-weight: 600;
text-shadow: ${({theme})=>theme.shadows.text};
`
export const Span=styled.span`
 color: ${({theme})=>theme.colors.secondary};
`
export const Paragraph=styled.p`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 width: 100%;
 margin: 0 auto;
 font-weight: 700;
 color: ${({theme})=>theme.colors.tertiary};
`