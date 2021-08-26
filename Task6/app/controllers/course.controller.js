const Course = require('../db/models/course.model')
const responseCreator = require('../helpers/response.helper')

const create = async(req,res)=>{
    try{
        const newInsert = new Course(req.body)
        // res.send(newInsert)
        await newInsert.save()
        const response = responseCreator(true, newInsert, "data inserted")
        console.log(response)
        res.status(200).send(response)  
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
}

const getAll = async(req, res)=>{
    try{
        myData = await Course.find()
        console.log(myData)
        const response = responseCreator(true, myData, "data fetched")
        res.status(200).send(response)  
    }
    catch(e){
        const response = responseCreator(false, e.message, "error infetching data")
        res.status(500).send(response)
    }
}

const getSingleCourse = async(req,res)=>{
    try{
        const id = req.params.id
        result = await Course.findById(id)
        console.log(result)
        const response = responseCreator(true, result, "data fetched")
        console.log(response)
        res.status(200).send(response) 
    }
    catch(e){
        const response = responseCreator(false, e.message, "error infetching data")
        res.status(500).send(response)
    }
}

const deleteCourse = async(req,res)=>{
    try{
        id = req.params.id
        const data = await Course.findByIdAndDelete(id) // User.deleteOne({_id:id})
        if(!data) return res.status(400).send({
            apiStatus:false,
            data:null,
            message:"Course not found"
        })
        const response = responseCreator(true, data, "data deleted")
        console.log(response)
        res.status(200).send(response) 
    }
    catch(e){
        const response = responseCreator(false, e.message, "error infetching data")
        res.status(500).send(response)
    }
}


const editCourse = async(req,res)=>{
    try{
        id = req.params.id
        const course = await Course.findByIdAndUpdate(id, req.body, {new:true})
        if(!course) return res.status(404).send({apiStatus:false, data:null, message:"course not found"})
        res.status(200).send({
            apiStatus:true,
            data:course,
            message:"updated"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message: "error in edit"
        })
    }

}
module.exports = { create , getAll , getSingleCourse , deleteCourse , editCourse}