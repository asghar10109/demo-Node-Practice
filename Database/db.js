const mongoose = require('mongoose')

const db = `mongodb+srv://muhammadasghar:cyubFOoEa6ODx2Oy@cluster0.pfkrnew.mongodb.net/demodatabase?retryWrites=true&w=majority`

const dbs = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(db)
    .then((res)=>{
        console.log("database connected sucessfully ")
    })
    .catch(err=>{
        console.log("database not connected sucessfully ")
    })

}

module.exports = dbs
