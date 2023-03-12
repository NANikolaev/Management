import styled from "styled-components";

export const Button=styled.button`
 width: 100px;
 align-self: center;
 font-size: 16px;
 font-weight: 600;
 padding: 3px;
 border: none;
 border-radius: 20px;
 transition: ease-in-out 300ms;
 cursor: pointer;
 box-shadow: ${({theme})=>theme.shadows.prime};
`