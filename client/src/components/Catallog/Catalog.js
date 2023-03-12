import { Link } from "react-router-dom";

import { StyledSection,StyledDiv,StyledHeading,StyledList,StyledListItem,StyledParagraph } from "./elements";

const Catalog=({employees,tasks})=>{
   

    return (
        <StyledSection>
           <StyledDiv>
            <StyledHeading>Employees</StyledHeading>
             <StyledList>
                 {employees.length > 0
                  ? employees.map((x,i)=><StyledListItem key={i}><Link to={`/employee/${x._id}/details`}>{x.name}</Link></StyledListItem>)
                  :<StyledParagraph>No employees yet</StyledParagraph>
                 }
             </StyledList>
           </StyledDiv>
           <StyledDiv>
           <StyledHeading>Tasks</StyledHeading>
           <StyledList>
              {tasks.length > 0
                  ? tasks.map((x,i)=><StyledListItem key={i}><Link to={`/task/${x._id}/details`}>{x.title}</Link></StyledListItem>)
                  :<StyledParagraph>No tasks yet</StyledParagraph>
              }
                
             </StyledList>
           </StyledDiv>
        </StyledSection>
    )
};

export default Catalog