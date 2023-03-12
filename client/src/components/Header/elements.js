import styled from "styled-components";

export const StyledHeader=styled.header`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
 a{
    font-weight: 600;  
 }
`
export const StyledList=styled.ul`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 gap: 20px;
`
export const StyledListItem=styled.li`
 display: flex;
 align-items: center;
 line-height: 1.5;
 gap: 5px;
 color: ${({theme})=>theme.colors.prime};
 font-size: 20px;
 transition: ease-in-out 300ms;
 &:hover{
    color:${({theme})=>theme.colors.secondary};
    transform:scale(1.03);
 }
`
export const StyledIcon=styled.img`
 width: 20px;
 height: 20px;
`