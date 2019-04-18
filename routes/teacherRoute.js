const express = require('express');
// const bcrypt = require('bcrypt');
const TeacherModel = require('../models/TeacherModel');
const router = express.Router();

router.post('/', async function(req, res){
  try {
    
      const Teacher = await TeacherModel.create(req.body);
      res.status(200).json({
        status: 'account has been created',
        data: Teacher

      });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'error',
      message: 'an error occured while creating account'

    })
  }
});


router.post('/Teacher', async function(req, res){
  try {
      const Teacher = await TeacherModel.create(req.body);
      res.status(200).json({
        status: 'account has been created',
        data: Teacher

      });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'error',
      message: 'an error occured while creating account'

    })
  }
});


router.put('/:email', async function(req, res) {
  try {
    const updateTeacher = await TeacherModel.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );


    if (!updateTeacher) {
      res.status(404).json({
        status: 'error',
        message: 'Sorry that teacher does not exist ',
      });
    }
    res.json({
      status: 'success',
      data: updateTeacher,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: 'error',
      message: 'An error occured while updating the teacher',
    });
  }
});

router.delete('/:email', async function(req, res) {
  try {
    const deleteTeacher = await TeacherModel.findOneAndDelete({
      email: req.params.email,
    });

    if (!deleteTeacher) {
      res.status(404).json({
        status: 'error',
        message: 'Sorry a teacher that does not exist cannot be deleted',
      });
      return;
    }

    res.json({
      status: 'success',
      message: ' teacher has been successfully deleted ',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'An error occured while deleting the teacher',
    });
  }
});



  module.exports = router;