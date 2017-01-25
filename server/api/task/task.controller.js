const Task = require('./task.model');
const _ = require('lodash');

exports.params = function (req, res, next, id) {
    Task.findById(id)
        .then(function (task) {
            if (!task) {
                next(new Error('No task exists with that id.'));
            } else {
                req.task = task;
                next();
            }
        }, function (err) {
            console.log("=== ERROR -> " + err);
            next(err);
        });
};

exports.get = function (req, res, next) {
    Task.find({})
        .then(function (tasks) {
            res.json(tasks);
        }, function (err) {
            console.log("=== ERROR -> " + err);
            next(err);
        });
};

exports.getOne = function (req, res) {
    var task = req.task;
    console.log(req);
    res.json(task);
};

exports.post = function (req, res, next) {
    var newTask = req.body;

    if (!newTask.title || (newTask.isDone + '')) {
        res.status(400);
        res.json({ "error": "Invalid data." });
    } else {
        Task.create(newTask)
            .then(function (task) {
                res.json(task);
            }, function (err) {
                console.log("=== ERROR -> " + err);
                next(err);
            });
    }
};


exports.put = function(req, res, next){
    var update = req.body;
    var post = req.post;

    _.merge(post, update);

    post.save(function(err, saved){
        if(err){
            next(err);
        }else{
            res.json(saved);
        }
    });
}; 

exports.delete = function (req, res, next) {
    req.task.remove(function (err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
}