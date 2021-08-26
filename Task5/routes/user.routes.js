const express=require('express')
const router = express.Router()
const dbConnection = require('../src/controller/dbConnection')
const {ObjectId} = require('mongodb')
router.get("",(req,res)=>{
    res.redirect('/showAll')
})
router.get('/add', (req,res)=>{
    res.render('add', {title: "add new Task"})
})

router.post('/add', (req,res)=>{
    data = req.body
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').insertOne(data, (e,d)=>{
            if(e) res.send(e)
            res.redirect('/showAll')
        })
    })
})
router.get('/showAll', (req,res)=>{
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').find().toArray((e,  d)=>{
            if(e) res.send(e)
            res.render('all', {
                title:"all Data",
                alltasks: d,
                isEmpty: d.length?false:true
            })
        
        })
        })
})

router.get('/single/:id', (req,res)=>{
    id = req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').findOne({_id: new ObjectId(id)}, ((e,  d)=>{
            if(e) res.send(e)
            res.render('single', {
                title:"all Data",
                alltasks: d
             })
            }))
        })        
    
})

router.post('/delete/:id', (req,res)=>{
    id=req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').deleteOne({_id:new ObjectId(id)})
        .then(()=>res.redirect('/showAll'))
        .catch(()=>res.send('cann\'t delete'))
    })

    res.redirect('/showAll')
})

router.get('/edit/:id', (req,res)=>{
    id = req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').findOne({_id: new ObjectId(id)}, ((e,  d)=>{
            if(e) res.send(e)
            res.render('edit', {
                title:"all Data",
                task: d
             })
            }))
        })        

})
router.post('/edit/:id', (req,res)=>{
    id=req.params.id
    data = req.body
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('tasks').updateOne(
            {_id:new ObjectId(id)},
                 {$set:data}
    )
    .then(()=>res.redirect('/showAll'))
    .catch(()=>res.send('cann\'t edit'))

    })

})

module.exports = router