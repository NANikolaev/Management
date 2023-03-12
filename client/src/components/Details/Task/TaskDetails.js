import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext,EmployeeContext } from "../../../contexts";
import { del } from "../../../services/service";

import {
    StyledArticle,
    StyledHeading,
    StyledSpan,
    StyledParagraph,
    StyledList,
    StyledListItem,
    StyledUpdateButton,
    StyledDeleteButton
}
    from "../elements";


const TaskDetails = () => {
    let id = useParams().id
    let [employees,setEmployees]= useContext(EmployeeContext);
    let [tasks, setTasks, navigate] = useContext(TaskContext);
    let task = tasks.find(x => x._id === id);

    function deleteTask() {
        let endpoint = `/task/${id}`;
       
        del(endpoint)
         .then((upEmployee) => {
            setTasks(list =>{
              let newList=list.filter(x=>x._id !== id)
              return newList
            });
            setEmployees(list=>{
               let newList=list.slice()
               let employee=list.find(x=>x._id === upEmployee._id)
               let index = list.indexOf(employee);
               newList[index]=upEmployee
               return newList
             });
            navigate('/')
          })
          .catch(err => console.log(err))
      }


    return (

        <StyledArticle>
            <StyledHeading>Task</StyledHeading>
            <StyledParagraph><StyledSpan>Title:</StyledSpan> {task.title}</StyledParagraph>
            <StyledParagraph><StyledSpan>Due Date:</StyledSpan> {task.duedate}</StyledParagraph>
            <StyledParagraph><StyledSpan>Assign to:</StyledSpan> {task.assigned.name}</StyledParagraph>
            <StyledParagraph><StyledSpan>Description:</StyledSpan> {task.description}</StyledParagraph>
            <StyledList>
                <StyledListItem><StyledUpdateButton onClick={() => navigate(`/task/${task._id}/update`)} >Update</StyledUpdateButton></StyledListItem>
                <StyledListItem><StyledDeleteButton onClick={deleteTask} >Delete</StyledDeleteButton></StyledListItem>
            </StyledList>
        </StyledArticle>

    )

};


export default TaskDetails