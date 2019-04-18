    
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subject_title: {
    type: String,
    required: true,
  },
  
  subject_unit:{
    type: Number,
    required: true,
  },
  
  subject_status: {
    type: String,
    enum: ['core', 'required', 'elective'],
    required: true,
  },
 
});


const SubjectModel = mongoose.model('Subject', subjectSchema);

module.exports = SubjectModel;