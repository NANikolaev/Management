import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 95%;
max-width: 680px;
padding: 20px;
gap: 20px;
border: 1px solid black;
border-radius: 5px;
box-shadow: ${({theme})=>theme.shadows.prime};
`

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
width: 260px;
gap: 5px;
`
export const Label = styled.label`
color: ${({ theme }) => theme.colors.prime};
font-weight: 600;
`
export const Input = styled.input`
line-height: 2.5;
font-weight: 700;
padding-left: 15px;
border-radius: 20px;
border: none;
outline: none;
box-shadow: ${({ theme }) => theme.shadows.prime};
`
export const SubmitInput=styled(Input)`
 width: 100px;
 align-self: center;
 color: ${({theme})=>theme.colors.prime};
 font-size: 16px;
 padding-left: 0;
 transition: ease-in-out 300ms;
 cursor: pointer;
 &:hover{
    color: ${({theme})=>theme.colors.tertiary};
    background: ${({theme})=>theme.colors.secondary};
 }
`
export const Select=styled.select`
 width: 170px;
 height: 30px;
 padding-left: 15px;
 outline: none;
 font-weight: 600;
 border-radius: 20px;
 box-shadow: ${({theme})=>theme.shadows.prime};
`


export const TextArea = styled.textarea`
 padding: 5px;
 width: 100%;
 max-width: 500px;
 height: 200px;
 padding: 10px;
 margin:0 auto;
 outline: none;
 border-radius: 5px;
 color: ${({theme})=>theme.colors.secondary};
 background: transparent;
 border: 1px solid black;
 box-shadow: ${({ theme }) => theme.shadows.prime};
 resize: none;
`