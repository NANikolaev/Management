const mongoose=require('mongoose');
const Employee=require('./Employee');

let taskSchema=new mongoose.Schema({
    title:{
       type:String,
       required:[true,'Title is required'],
    },
    description:{
       type:String,
       required:[true,'Description is required'],
    },
    duedate:{
       type:String,
       required:[true,"Due Date is required"],
    },
    status:{
      type:String,
      enum: ['In Progress','Completed'],
      default:"In Progress"
    },
    assigned:{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    
});

const Task=mongoose.model('Task',taskSchema)
module.exports=Task