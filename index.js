const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TeacherRoute = require('./routes/teacherRoute');
const SubjectRoute = require('./routes/subjectRoute');
const app = express();
const port = 3377;

app.listen(port).on('listening', () => {
  console.log(' Your server is running');
});

mongoose

.connect('mongodb://localhost/expressnode', {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB is connected and ready for use');
  })
  .catch(err => {
    console.log('An error occured while connecting to MongoDB', err);
  });

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/Teacher', TeacherRoute);

app.use('/Subject', SubjectRoute);