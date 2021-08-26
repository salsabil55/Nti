const mongoose = require('mongoose')
const validator = require('validator')


const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 4,
        maxlength:20,
        trim:true,
        unique:true
    },
    courseContent:{
        type:String,
        required:true,
        trim:true
    },
    totalHours:{
        type:Number,
        required: true
        
    }
    ,// day:Saturday from: 8 to 10
    schedule: [      
        {
            date: {
                day:{
                    type:String,
                    required:true,
                    trim:true
                },
                from:{
                    type:Number,
                    required:true
                },
                to:{
                    type:Number,
                    required:true
                }
             }
        }
    ],
    quizes:[
        {
           quiz:{
              name:{
                  type:String,
                  required:true
              }

           } 
        }
    ]
})

const Course = mongoose.model("Course", CourseSchema)
module.exports = Course