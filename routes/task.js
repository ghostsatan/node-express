var express = require('express');
var router = express.Router();
var _=require('lodash');

var tasks=[{id:'1',name:'hello'},{id:'2',name:'world'}]; //simple data 
var id=3;

/* 获得首页 */
router.get('/', function(req, res, next) {
  res.json(tasks);
});

//return all
router.get('/', function(req, res) {
    res.json(tasks);
});

//create new
router.post('/', function(req, res) {
    var newTask=req.body;
    newTask.id=''+(id++);
    tasks.push(newTask);
    res.json(newTask);
});

//get one
router.get('/:id', function(req, res) {
    var task=_.find(tasks,{id:req.params.id});
    res.json(task);
});

//update one
router.put('/:id', function(req, res) {
    _.remove(tasks,{id:req.params.id});
    var newTask=req.body;
    newTask.id=req.params.id;
    tasks.push(newTask);
    res.json(newTask);
});

//remove one
router.delete('/:id', function(req, res) {
    _.remove(tasks,{id:req.params.id});
    res.json({id:req.params.id});
});

module.exports = router;
