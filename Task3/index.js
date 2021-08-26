const yargs = require('yargs')
const functions = require('./functions')

yargs.command({
    command:"addClient",
    describe:"addClient",
    builder:{
        id:{ demandOption:true, type:"number"},
        name:{demandOption:true, type:"string"},
        acc:{demandOption:true, type:"string"},
        status:{demandOption:true, type:"boolen"},
        balance:{demandOption:true, type:"number"}
    },
    handler:function(argv){ functions.addClient(argv)}
})
yargs.command({
    command: "editClient",
    describe:"editClient",
    builder:{
        id:{ demandOption:true, type:"number"},
        newClass:{ demandOption:true, type:"string"},
        newStatus:{demandOption:true, type:"string"},
        balance:{demandOption:true, type:"number"}

    },
    handler:function(argv){ functions.editClient(argv)}
})

yargs.command({
    command:"deleteClient",
    describe:"deleteClient",
    builder:{
        id:{type:"number"}
    },
    handler:function(argv){ functions.delete(argv)}
})
yargs.command({
    command:"showAll",
    describe:"show All customers",
    handler:function(){ functions.showAllClients()}
})

yargs.command({
    command:"searchCustomer",
    describe:"search customer",
    builder:{
        key:{ type:"string"}
    },
    handler:function(argv){ functions.searchData(argv)}
})
yargs.command({
    command:"deposit",
    describe:"deposit",
    builder:{
        balance: { demandOption:true,type:"number"},
        accNum: { demandOption:true,type:"number"}
    },
    handler:function(argv){ functions.deposit(argv)}
})

yargs.command({
    command:"withdraw",
    describe:"withdraw",
    builder:{
        balance: { demandOption:true,type:"number"},
        accNum: { demandOption:true,type:"number"}
    },
    handler:function(argv){ functions.withdraw(argv)}
})

yargs.command({
    command:"updateStatus",
    describe:"update status",
    builder:{
        status: { demandOption:true,type:"boolean"},
        accNum: { demandOption:true,type:"number"}
    },
    handler:function(argv){ functions.updateStatue(argv)}
})
