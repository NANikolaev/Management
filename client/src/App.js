import { Routes, Route, useNavigate } from "react-router-dom";

import { EmployeeContext, TaskContext } from "./contexts";
import { useDataList } from "./hooks/useDataList";

import Header from "./components/Header/Header";
import Catalog from "./components/Catallog/Catalog";
import Wrapper from "./components/Wrapper/Wrapper";
import CreateEmployee from "./components/Forms/Employee/CreateEmployee";
import UpdateEmployee from "./components/Forms/Employee/UpdateEmployee";
import EmployeeDetails from "./components/Details/Employee/EmployeeDetails";
import CreateTask from "./components/Forms/Task/CreateTask";
import UpdateTask from "./components/Forms/Task/UpdateTask";
import TaskDetails from "./components/Details/Task/TaskDetails";
import Top from "./components/Top/Top";

export const App = () => {

  let navigate = useNavigate();
  let [employees, setEmployees] = useDataList('/employees/list');
  let [tasks, setTasks] = useDataList('/tasks/list');

  return (
    <>
      <Header />
      <main>
        <EmployeeContext.Provider value={[employees, setEmployees, navigate]}>
          <TaskContext.Provider value={[tasks, setTasks, navigate]}>
            <Catalog employees={employees} tasks={tasks} />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Top employees={employees}/>} />
                <Route path="/employee/add" element={<CreateEmployee />} />
                <Route path="/employee/:id/update" element={<UpdateEmployee />} />
                <Route path="/employee/:id/details" element={<EmployeeDetails />} />
                <Route path="/task/add" element={<CreateTask />} />
                <Route path="/task/:id/update" element={<UpdateTask />} />
                <Route path="/task/:id/details" element={<TaskDetails />} />
              </Routes>
            </Wrapper>
          </TaskContext.Provider>
        </EmployeeContext.Provider>
      </main>
    </>
  );
}

export default App;
