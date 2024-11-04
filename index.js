const express = require('express')
const mongoose = require('mongoose')
const registerUser = require('./route')
require('dotenv/config')

const app = express()
const PORT = 9000

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log('Database Connection done'))
.catch((err)=>console.log("Database failed to connect!",err))

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/',registerUser)

app.listen(PORT,()=> console.log('Server running!'))
