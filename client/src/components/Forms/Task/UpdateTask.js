import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext, EmployeeContext } from "../../../contexts";
import { update } from "../../../services/service";

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


const UpdateTask = () => {

    let id = useParams().id

    let [tasks, setTasks, navigate] = useContext(TaskContext);
    let task = tasks.find(x => x._id === id);
    let taskIndex = tasks.indexOf(task);

    let [employees, setEmployees] = useContext(EmployeeContext);
    let currentEmployee=employees.find(x=>x._id === task.assigned._id);
    let currentEmployeeIndex=employees.indexOf(currentEmployee);

    let employeesList = employees.filter(x => x.name !== task.assigned.name);

    function updateTask(e) {
        let endpoint = `/task/${id}`;
        
        update(e, endpoint)
            .then(([upTask,upEmployee]) => {
                setEmployees(list => {
                    let newList = list.slice()
                    let newEmployee=employees.find(x=>x._id === upEmployee._id);
                    let newEmployeeIndex=employees.indexOf(newEmployee);
                  
                    if(currentEmployee._id !== upEmployee._id){
                        currentEmployee.tasks=currentEmployee.tasks.filter(x=>x._id !== task._id);               
                        newList[currentEmployeeIndex]=currentEmployee
                        newList[newEmployeeIndex]=upEmployee
                        return newList
                    }
                    newList[currentEmployeeIndex]=upEmployee
                    return newList
                });
                setTasks(list => {
                    let newList = list.slice()
                    newList[taskIndex] = upTask;
                    return newList
                });
                navigate(endpoint+'/details');
            })
    }

    return (
        <StyledForm onSubmit={updateTask} >
            <StyledHeading>UPDATE TASK</StyledHeading>
            <StyledFormGroup>
                <StyledLabel htmlFor="title">Title</StyledLabel>
                <StyledInput type='text' name="title" minLength={2} required defaultValue={task.title} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="duedate">Due Date</StyledLabel>
                <StyledInput type='date' name="duedate" min={task.duedate} required defaultValue={task.duedate} />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="assigned">Assign to:</StyledLabel>
                <StyledSelect name="assigned">
                    <option key={id} value={task.assigned._id}>{task.assigned.name}</option>
                    {employeesList.map((x, i) => <option key={i} value={x._id}>{x.name}</option>)}
                </StyledSelect>
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="description">Description</StyledLabel>
                <StyledTextArea name="description" minLength={15} required defaultValue={task.description}></StyledTextArea>
            </StyledFormGroup>
            <StyledSubmitInput type='submit' value="Update" />
        </StyledForm>
    )

};

export default UpdateTask