import { useContext } from "react";
import { TaskContext, EmployeeContext } from "../../../contexts";
import { add } from "../../../services/service";

import {
    StyledForm,
    StyledFormGroup,
    StyledLabel,
    StyledInput,
    StyledSubmitInput,
    StyledHeading,
    StyledSelect,
    StyledTextArea
}
    from "./elements";

const CreateTask = () => {

    let [employees,setEmployees] = useContext(EmployeeContext);
    let [tasks, setTasks, navigate] = useContext(TaskContext);
    let currentDate = new Date().toLocaleDateString('fr-CA');

    function addTask(e){
         let endpoint='/tasks/list';
         add(e,endpoint)
         .then(([task,upEmployee])=>{
           setTasks(tasks=>[...tasks,task]);
           setEmployees(employees=>{
           let newList=employees.slice();
           let employee=employees.find(x=>x._id === upEmployee._id);
           let index=employees.indexOf(employee)
           newList[index]=upEmployee;
           return newList
           })
           navigate(`task/${task._id}/details`)
         })
         .catch(err=>console.log(err))
    }

    return (
        <StyledForm onSubmit={addTask}>
            <StyledHeading>NEW TASK</StyledHeading>
            <StyledFormGroup>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <StyledInput type='text' name="title" minLength={2} required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="duedate">Due Date</StyledLabel>
                <StyledInput type='date' name="duedate" min={currentDate} required />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="assigned">Assign to:</StyledLabel>
                <StyledSelect name="assigned">
                    {employees.map((x, i) => <option key={i} value={x._id}>{x.name}</option>)}
                </StyledSelect>
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="description">Description</StyledLabel>
                <StyledTextArea name="description" minLength={15} required></StyledTextArea>
            </StyledFormGroup>
            <StyledSubmitInput type='submit' value="Create" />
        </StyledForm>
    )

};

export default CreateTask