const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

//get api
router.get('/find/:id', function(req,res,next){
    Contact.findOne({mobileNumber: req.params.id}).then((data) => {
        console.log(data);
        return res.status(201).json({
            message: data
        });
    }).catch(err => {
        res.status(500).json({
            error : err
        });
    });
});

router.post('/newContact', function(req,res,next){
    Contact.find({mobileNumber: req.body.mobileNumber}).then(contact => {
        if(contact.length>=1){
            return res.status(409).json({
                message: "Contact with the name"+ Contact.name + "already exists"
            });
        }
        else {
            Contact.create(req.body).then(data => {
                return res.status(201).json({
                    message: "New Contact saved" + data
                });
            }).catch(err => {
                return res.status(500).json({
                    error: err
                });
            })
        }
    }).catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});


//put api update name or number
router.put('/update/:id', function(req, res, next){
    Contact.findOne({ mobileNumber: req.body.id}).then(contact =>{
        Contact.update({req})
    })
});