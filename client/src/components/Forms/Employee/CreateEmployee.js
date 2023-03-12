import { useContext } from "react";
import {EmployeeContext} from "../../../contexts";
import { add } from "../../../services/service";

import { StyledForm, StyledFormGroup, StyledLabel, StyledInput, StyledSubmitInput,StyledHeading } from "./elements";

const CreateEmployee = () => {
    
    let [employees,setEmployees,navigate]=useContext(EmployeeContext);

    function addEmployee(e){
         let endpoint="/employees/list";
         add(e,endpoint)
         .then(employee=>{
            setEmployees(list=>[...list,employee]);
            navigate(`/employee/${employee._id}/details`);
         })
         .catch(err=>console.log(err))
      
    }
  
    return (
        <StyledForm onSubmit={addEmployee}>
             <StyledHeading>NEW EMPLOYEE</StyledHeading>
            <StyledFormGroup>
                <StyledLabel htmlFor="name">Full Name</StyledLabel>
                <StyledInput type='text' name="name" pattern='[A-z]{2,} [A-z]{2,}' required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="dob">Date of Birth</StyledLabel>
                <StyledInput type="date" name="dob" min='1960-01-01' max='2005-12-31' required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" name="email" pattern="^[\w\-\.]+@[a-zA-Z]+[.][a-z]+$" required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="phone">Phone</StyledLabel>
                <StyledInput type="tel" name="phone" pattern='[08][5-9]{2}[0-9]{7}' required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="salary">Salary</StyledLabel>
                <StyledInput type="number" name="salary" required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledSubmitInput type="submit" value="Create" />
            </StyledFormGroup>
        </StyledForm>
    )
};

export default CreateEmployee