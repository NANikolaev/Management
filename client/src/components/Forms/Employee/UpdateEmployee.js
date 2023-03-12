import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "../../../contexts";
import { update } from "../../../services/service";


import { StyledForm, StyledFormGroup, StyledLabel, StyledInput, StyledSubmitInput, StyledHeading } from "./elements";


const UpdateEmployee = () => {
    let id = useParams().id
    let [employees, setEmployees, navigate] = useContext(EmployeeContext);
    let employee = employees.find(x => x._id === id);

    function updateEmployee(e) {
        let endpoint = `/employee/${id}`;
        let index = employees.indexOf(employee);
        update(e, endpoint)
            .then(upEmployee => {
                setEmployees(list => {
                    let updatedList = list.slice()
                    updatedList[index] = upEmployee;
                    return updatedList
                });
                navigate(endpoint+'/details')
            })
         .catch(err=>console.log(err))    
    };

    return (
        <StyledForm onSubmit={updateEmployee}>
            <StyledHeading>Update Employee</StyledHeading>
            <StyledFormGroup>
                <StyledLabel htmlFor="name">Full Name</StyledLabel>
                <StyledInput type='text' name="name" pattern='[A-z]{2,} [A-z]{2,}' required defaultValue={employee.name} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="dob">Date of Birth</StyledLabel>
                <StyledInput type="date" name="dob" min='1960-01-01' max='2005-12-31' required defaultValue={employee.dob} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" name="email" pattern="^[\w\-\.]+@[a-zA-Z]+[.][a-z]+$" required defaultValue={employee.email} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="phone">Phone</StyledLabel>
                <StyledInput type="tel" name="phone" pattern='[08][5-9]{2}[0-9]{7}' required defaultValue={`${0}${employee.phone}`} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="salary">Salary</StyledLabel>
                <StyledInput type="number" name="salary" required defaultValue={employee.salary} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledSubmitInput type="submit" value="Update" />
            </StyledFormGroup>
        </StyledForm>
    )
};

export default UpdateEmployee