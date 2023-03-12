import styled from "styled-components";

import { Form,FormGroup,Label,Input,SubmitInput,Heading,Select,TextArea } from "../../common";

export const StyledForm=styled(Form)`
 div:nth-of-type(3){
   flex-direction: row;
   align-items: center;
   gap: 10px;
 }
 div:nth-of-type(4){
   width: 100%;
   label{
      text-align: center;
   }
 }
`
export const StyledFormGroup=styled(FormGroup)``
export const StyledLabel=styled(Label)``
export const StyledInput=styled(Input)``
export const StyledSubmitInput=styled(SubmitInput)``
export const StyledSelect=styled(Select)``
export const StyledTextArea=styled(TextArea)``
export const StyledHeading=styled(Heading)`
 width: 100%;
 font-size: 24px;
 text-transform: uppercase;
`