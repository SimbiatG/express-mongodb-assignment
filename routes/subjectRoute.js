const express = require('express');
const SubjectModel = require('../models/SubjectModel');
const router = express.Router();

router.post('/', async function(req, res){
    try {
      
        const Subject = await SubjectModel.create(req.body);
        res.status(200).json({
          status: ' Subject account has been created',
          data: Subject
  
        });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        status: 'Error',
        message: 'An error occured while creating a subject account'
  
      })
    }
  });

  
router.put('/:subject_title', async function(req, res) {
    try {
      const editSubject = await SubjectModel.findOneAndUpdate(
        { subject_title: req.params.subject_title },
        req.body,
        { new: true }
      );
  
  
      if (!editSubject) {
        res.status(404).json({
          status: 'error',
          message: 'Sorry that subject does not exist ',
        });
      }
      res.json({
        status: 'success',
        data: editSubject,
      });
    } catch (err) {
      console.log(err);
  
      res.status(500).json({
        status: 'error',
        message: 'An error occured while updating the subject',
      });
    }
  });
  
  router.delete('/:subject_title', async function(req, res) {
    try {
      const deleteSubject = await SubjectModel.findOneAndDelete({
        subject_title: req.params.subject_title,
      });
  
      if (!deleteSubject) {
        res.status(404).json({
          status: 'error',
          message: 'Sorry a subject that does not exist cannot be deleted',
        });
        return;
      }
  
      res.json({
        status: 'success',
        message: ' subject has been successfully deleted ',
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 'error',
        message: 'An error occured while deleting the subject',
      });
    }
  });
  

  module.exports = router;