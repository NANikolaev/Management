import { Link } from "react-router-dom";
import { StyledDiv, StyledHeading, StyledList, StyledListItem, StyledSpan } from "./elements";


const Top = ({ employees }) => {
    let copy = employees.slice()
    copy.sort((a, b) => b.tasks.length - a.tasks.length)
    let top = copy.slice(0, 5)


    return (
        <StyledDiv>
            <StyledHeading>Top 5 Employees</StyledHeading>
            <StyledList>
                {top.map((x, i) =>
                 <StyledListItem key={i}>
                    <StyledSpan>{++i}.</StyledSpan><Link to={`/employee/${x._id}/details`}>{x.name}</Link><StyledSpan>{x.tasks.length} tasks</StyledSpan>
                 </StyledListItem>)}
            </StyledList>
        </StyledDiv>
    )

};

export default Top