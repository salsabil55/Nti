require('dotenv').config();
require('./db/dbConnection');
const express = require('express');
const courseRouter = require('../routes/course.routes');


const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(courseRouter);

module.exports = app