const router = require('express').Router();
let taskService = require('../services/task-service');

router.route("/tasks/list")

    .get((req, res) => {
        taskService.allTasks()
            .then(list => res.json(list))
            .catch(err => console.log(err))
    })
    .post((req, res) => {
        let taskData = req.body;
        taskService.addTask(taskData)
            .then(([task, employee]) => res.json([task, employee]))
            .catch(err => console.log(err))
    })

router.route('/task/:id')

    .put((req, res) => {
        let id = req.params.id;
        let task = req.body;
        taskService.updateTask(id, task)
            .then(([task,employee]) => res.json([task,employee]))
            .catch(err => console.log(err))
    })
    .delete((req,res)=>{
        let id=req.params.id;
        taskService.deleteTask(id)
        .then((employee)=>res.json(employee))
        .catch(err=>console.log(err))
    })

module.exports = router