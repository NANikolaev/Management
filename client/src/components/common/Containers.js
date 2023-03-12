import styled from "styled-components";

export const SectionContainer=styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
`
export const DivContainer=styled.div`
 display: flex;
`
export const ArticleContainer=styled.article`
 display: flex;
 flex-direction: column;
 justify-content: center;
 overflow: hidden;
 padding: 20px;
 gap: 20px;
 width: 95%;
 max-width: 680px;
 border: 1px solid black;
 border-radius: 5px;
 box-shadow: ${({theme})=>theme.shadows.prime}
`