const fs = require('fs')
let data = []
const readJsonFile = ()=>{
    try{
    data = JSON.parse(fs.readFileSync('src/model/data.json').toString())
    if(!Array.isArray(data)) throw new Error()
    }
    catch(e){ data = [] 
    console.log(data)}
}
const saveJsonFile = () =>{
    fs.writeFileSync('src/model/data.json', JSON.stringify(data))
}

class Customer {
    addNewCustomer(name,balance,age){
        readJsonFile()
        let newCustomer = {
            _id:new Date().getTime(),
            accNum:new Date().getTime(),
            name,balance,age,
            status:false
        }
            data.push(newCustomer) 
            saveJsonFile()
        }
        
        deleteCustomer(customerId) {
            readJsonFile()
            let index = data.findIndex(customer => customer._id == customerId)
            data.splice(index,1)
            saveJsonFile()
        }
        searchCustomer(customerId) {
            readJsonFile()
            let index = data.findIndex(customer=> customer._id == customerId)
            return data[index]
        }
        editCustomer(customerId , newData){
            readJsonFile()
            let index = data.findIndex(customer=> customer._id == customerId)
            newData._id = data[index]._id
            data[index] = newData
            saveJsonFile()


        }
        showAllCustomers(){
            readJsonFile()
            return data
        }

}

const customerObj = new Customer()
module.exports = customerObj