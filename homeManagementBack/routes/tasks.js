var express = require('express');
var router = express.Router();
var Task = require('../models/tasks');
var Member = require('../models/members');

router.post('/add', (req, res) => {

    new Task(req.body).save()
        .then(result => res.json(result))
        .catch(error => {
            if (error)
                res.json({ err: error });
        });
});

router.get('/showAll', (req, res) => {

    Task.find({})
        .then(result => { res.json(result) })
        .catch(error => {
            if (error)
                res.json({ err: error });
        });
});

router.get('/showAllMembers', (req, res) => {

    Member.find({})
        .then(result => { res.json(result) })
        .catch(error => {
            if (error)
                res.json({ err: error });
        });
});

router.put('/update', (req, res) => {

    var id = req.query._id;
    Task.findByIdAndUpdate({_id: id}, req.body, { new: true })
        .then(result => { res.json(result) })
        .catch(error => {
            if (error)
                res.json({ err: error });
        });
});

router.delete('/delete', (req, res) => {

    var id = req.query._id;
    Task.findByIdAndRemove({_id: id})
        .then(result => { res.json(result) })
        .catch(error => {
            if (error)
                res.json({ err: error });
        });
});


module.exports = router;