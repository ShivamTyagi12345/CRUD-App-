const express= require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/HELLOWORLD'
const app= express()
mongoose.connect(url,{
    
    useNewUrlParser:true
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false

})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())

const MYRouter = require('./routes/aliens')
app.use('/XYZ',MYRouter)

app.listen(9000, () => {
    console.log('Server started')
})