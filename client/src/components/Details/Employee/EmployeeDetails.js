import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../../../contexts";
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


const EmployeeDetails = () => {
  let id = useParams().id
  let [employees, setEmployees, navigate] = useContext(EmployeeContext);
  let employee = employees.find(x => x._id === id);
  let tasks=employee.tasks.map(x=>` ${x.title} `).toString();
  

  function deleteEmployee() {
    let endpoint = `/employee/${id}`;
   
    del(endpoint)
      .then(() => {
        setEmployees(list =>{
          let newList=list.filter(x=>x._id !== id)
          return newList
        });
        navigate('/')
      })
      .catch(err => console.log(err))
  }



  return (
    <StyledArticle>
      <StyledHeading>Employee</StyledHeading>
      <StyledParagraph><StyledSpan>Name:</StyledSpan> {employee.name}</StyledParagraph>
      <StyledParagraph><StyledSpan>Email:</StyledSpan> {employee.email}</StyledParagraph>
      <StyledParagraph><StyledSpan>Phone:</StyledSpan>+359 {employee.phone}</StyledParagraph>
      <StyledParagraph><StyledSpan>Date of Birth:</StyledSpan> {employee.dob}</StyledParagraph>
      <StyledParagraph><StyledSpan>Salary:</StyledSpan> {employee.salary}</StyledParagraph>
      {tasks
        ? <StyledParagraph><StyledSpan>Tasks:</StyledSpan>{tasks}</StyledParagraph>
        : <StyledParagraph><StyledSpan>Tasks:</StyledSpan> No Tasks</StyledParagraph>
      }
      <StyledList>
        <StyledListItem><StyledUpdateButton onClick={() => navigate(`/employee/${employee._id}/update`)} >Update</StyledUpdateButton></StyledListItem>
        <StyledListItem><StyledDeleteButton onClick={deleteEmployee}>Delete</StyledDeleteButton></StyledListItem>
      </StyledList>
    </StyledArticle>
  )

};

export default EmployeeDetails