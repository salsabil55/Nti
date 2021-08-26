const fs = require('fs')
const chalk = require('chalk')
class Client {
    myData = null
  // read client
readClientFromJSON () {
    let clients
    try{
        clients = JSON.parse(fs.readFileSync('clients.json').toString())
        if(!Array.isArray(clients)) throw new Error()
    }
    catch(e){
        clients = []
    }
    return clients
}

    writeData(){
        fs.writeFileSync('clients.json', JSON.stringify(this.myData))
    }


// write client
writeClientInJSON (data){
    fs.writeFileSync('clients.json', JSON.stringify(data))
}

//add client
addClient(clientData) {
    let allClients = readStudentFromJSON()
    let errors = []
    if( checkBalance(clientData) )  errors.push('invalid class name')
    if( checkStatus(clientData)) errors.push('your Account deactived')
    const client = {
        id : Date.now(),
        name: clientData.name,
        acc: clientData.acc,
        status: false,
        balance: clientData.balance
    }
    console.log(client)
    allClients.push(client)
    writeStudentsInJSON(allClients)
    console.log(chalk.green('data added successfuly'))
}

// search client
searchById (allClients, id){
    return allClients.findIndex( c => c.id == id)
 }

// show clients
showAllClients(){
    allClients=readStudentFromJSON()
    allClients.forEach(c =>{
        if(c.status) console.log(`clientName: ${c.name}`)
    })
}

// delete clients
deleteClient (id){
    allClients=readStudentFromJSON()
    allClients.forEach(c =>{
      i = allClients.findIndex(t=> t.id == c.id)
    })
    allClients.splice(i,1)
}
// check balance
checkBalance(clientData){
    return clientData.balance;
}
// change status
updateStatue(argv){
    const status = argv.status;
    const accNum = argv.accNum;
    this.readClientFromJSON()
    let index = this.clientData.findIndex(client =>  client.accNum== accNum)
    if(index===-1) return console.log('client Not Found');
    else {
        this.clientData[index].status=status;
        this.writeData()
        this.showAllClients();

    }
}

// add credit
addCredit(clientData) {
    let allClients = readStudentFromJSON()
    if(clientData.balance > 10000) {
        console.log('cant add credit')
    }
    else{
        newBalance+=allClients[index].balance
    }
}



deposit(argv){
    const balance = argv.balance;
    const accNum = argv.accNum;
    this.readClientFromJSON()
    let client = this.myData.find(client=> client[accNum] == argv[accNum] )
    if(balance > 10000||!client||!client.status){
        return console.log('Deposit Failure')
    }
    else{
        addCredit(clientData)
        this.writeData()

    }
}


withdraw(argv){
    const balance = argv.balance;
    const accNum = argv.accNum;
    this.readClientFromJSON()
    let client = this.myData.find(client=> client[accNum] == argv[accNum] )
    if(balance > 5000||!client||balance>client.balance||!client.status){
        return console.log('Withdrawal Failure')
    }
    else{
        newBalance+=allClients[index].balance
        this.writeData()
    }
}

}
addCredit({"name":"Hana","acc":100,"balance":5000})
addClient({"name":"Hana","acc":100,"balance":5000})
let Client = new Client()
module.exports = client