import { Link } from "react-router-dom";
import { StyledHeader,StyledList,StyledListItem,StyledIcon } from "./elements";

import plusIcon from "../../assets/icons/icons8-plus-math-48.png";
import trophyIcon from "../../assets/icons/icons8-employee-50.png";

const Header=()=>{

   return (
    <StyledHeader>
      <StyledList>
        <StyledListItem><StyledIcon src={plusIcon}/> <Link to='/employee/add'>Add Employee</Link></StyledListItem>
        <StyledListItem><StyledIcon src={plusIcon}/> <Link to='/task/add'>Add Task</Link></StyledListItem>
        <StyledListItem><StyledIcon src={trophyIcon}/> <Link to='/'>Top</Link></StyledListItem>
      </StyledList>
    </StyledHeader>
   )
};

export default Header