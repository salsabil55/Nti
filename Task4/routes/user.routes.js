const express = require('express');
const router = express.Router()
const userController = require('../src/controller/user.controller')

router.get("",(req,res)=>{
    res.redirect('/showAll')
})
router.get('/add', (req,res)=>{
    res.render('add', {title: "add new client"})
})
router.post('/add', (req,res)=>{
    userController.addNewCustomer(req.body.name,req.body.balance,req.body.age)
    res.redirect('/showAll')
})
router.get('/showAll', (req,res)=>{
    allcustomers= userController.showAllCustomers()
    console.log( allcustomers.length )
    console.log(allcustomers)
    res.render('all', {
        title:"all Data",
        allcustomers,
        isEmpty: allcustomers.length?false:true
    })
})

router.post('/delete/:id', (req,res) => {
    userController.deleteCustomer(req.params.id)
    res.redirect('/showAll')
})

router.get('/edit/:id', (req,res)=>{
    customer = userController.searchCustomer(req.params.id)
    res.render('edit', {title: "edit client", client:customer})
})
router.post('/edit/:id', (req,res)=>{
    client = req.body
    userController.editCustomer(req.params.id,req.body)
    res.redirect('/showAll')
})

module.exports = router