const Task = require('../models/Task');
const Employee = require('../models/Employee');

const allTasks = () => {
    return Task.find({}).lean().populate('assigned');
};
const addTask = async (data) => {
    let employeeId = data.assigned;

    let newTask = await Task.create(data);
    newTask = await newTask.populate('assigned')

    let employee = await Employee.findById(employeeId).lean();
    employee.tasks.push(newTask._id)

    let upEmployee = await Employee.findByIdAndUpdate(employeeId, employee, { new: true, populate: "tasks" });

    return [newTask, upEmployee]

};
const updateTask = async (id, data) => {

    let assignedId = data.assigned;

    let task = await Task.findById(id);
    let newTask = await Task.findByIdAndUpdate(id, data, { new: true, populate: "assigned" }).lean();

    if (task.assigned._id.toString() !== assignedId) {
        let oldEmployee = await Employee.findById(task.assigned._id);
        oldEmployee.tasks = oldEmployee.tasks.filter(x => x.toString() !== task._id.toString());
        await Employee.findByIdAndUpdate(oldEmployee._id, oldEmployee);

        let newEmployee = await Employee.findById(assignedId).lean();
        let isIn = newEmployee.tasks.find(x => x.toString() === newTask._id.toString())
        if (!isIn) {
            newEmployee.tasks.push(newTask._id)
            await Employee.findByIdAndUpdate(assignedId, newEmployee)
        }

    }
    else if (task.assigned._id.toString() === assignedId) {
        let employee = await Employee.findById(assignedId).lean();
        let isIn = employee.tasks.find(x => x.toString() === newTask._id.toString())
        if (!isIn) {
            employee.tasks.push(newTask._id)
            await Employee.findByIdAndUpdate(assignedId, employee)
        }
    }

    let upEmployee = await Employee.findById(assignedId).lean().populate('tasks')


    return [newTask, upEmployee]
};

const deleteTask=async(id)=>{
      let task=await Task.findById(id);
      let employee= await Employee.findById(task.assigned._id);
          employee.tasks=employee.tasks.filter(x=>x.toString() !== id)
          await Task.findByIdAndDelete(id)
          return Employee.findByIdAndUpdate(employee._id,employee,{ new: true, populate: "tasks" });    
};


module.exports = {
    allTasks,
    addTask,
    updateTask,
    deleteTask,
}