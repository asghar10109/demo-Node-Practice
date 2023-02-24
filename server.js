const express = require('express')
const cors = require('cors')
const dbs = require('./Database/db')
const userroute = require('./Routes/users')
const app = express()


app.use(express.json())
app.use(cors())
app.use('/users' , userroute)

const Port = 3000
{dbs()}
app.listen(Port,()=>{
    console.log(`running server on port ${Port}`)
})
