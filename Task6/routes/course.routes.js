const router = require('express').Router()
const courseController = require('../app/controllers/course.controller')
const upload = require('../app/middleware/upload')
const auth = require('../app/middleware/auth')

router.post('/createCourse',courseController.create)
router.get('/getAllCourse',courseController.getAll)
router.get('/getAllCourse/:id',courseController.getSingleCourse)
router.delete('/deleteCourse/:id',courseController.deleteCourse)
router.patch('/editCourse/:id', courseController.editCourse) //put
// router.post('/createCourse',upload.single('uploadCourse'),async (req,res)=>{
//     const newInsert = new Course(req.body)
//         // res.send(newInsert)
//     await newInsert.save()
//      const response = responseCreator(true, newInsert, "data inserted")
//      console.log(response)
//     res.status(200).send(response)  
//     req.user.image = req.file.path
//     await req.user.save()
//     res.send('done')
// } )

module.exports = router;