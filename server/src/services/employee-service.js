const Employee = require('../models/Employee');
const Task=require('../models/Task');

const allEmployees = () => {
    return Employee.find({}).lean().populate('tasks');
};
const addEmployee = (data) => {
    return Employee.create(data);
};
const updateEmployee = (id, data) => {
    return Employee.findByIdAndUpdate(id,data,{new:true,populate:"tasks"})
};
const deleteEmployee = (id) => {
    return Employee.findByIdAndDelete(id);
};



module.exports = {
    allEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
}