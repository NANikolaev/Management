const employeeController=require('../controllers/employee-controller');
const taskController=require('../controllers/task-controller');


module.exports=(server)=>{
    server.use(employeeController)
    server.use(taskController) 
};