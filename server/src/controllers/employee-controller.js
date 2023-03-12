let router = require('express').Router();
let employeeService=require('../services/employee-service');

router.route("/employees/list")

.get((req,res)=>{
    employeeService.allEmployees()
    .then(list=>res.json(list))
    .catch(err=>console.log(err))
})

.post((req,res)=>{
    let employeeData=req.body;
    employeeService.addEmployee(employeeData)
    .then(employee=>res.json(employee))
    .catch(err=>console.log(err))
})

router.route('/employee/:id')

.put((req,res)=>{
    let id=req.params.id;
    let employee=req.body;
    employeeService.updateEmployee(id,employee)
    .then(upEmployee=>res.json(upEmployee))
    .catch(err=>console.log(err))
})
.delete((req,res)=>{
    let id=req.params.id;
    employeeService.deleteEmployee(id)
    .then(()=>res.json({}))
    .catch(err=>console.log(err))
})

module.exports = router