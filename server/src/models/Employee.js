const mongoose = require('mongoose');
const Task = require('./Task');

let employeeSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Name is required'],
   },
   email: {
      type: String,
      unique: [true],
      required: [true, 'Email is required'],
   },
   phone: {
      type: Number,
      unique: [true],
      required: [true, "Phone number is required"],
   },
   dob: {
      type: String,
      required: [true, "Date of Birth is required"],
   },
   salary: {
      type: Number,
      required: [true, "Salary is required"],
   },
   tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],

});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;