//importing libraries
const express = require ("express")
const mysql = require ("mysql")
const cors = require ("cors")

//configuring libraries
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 
app.use('/storage', express.static('storage'));

//creating the database
/*const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fern-db"
})*/

//Listening on port 4000
app.listen(4000, function(){
    console.log("Connection to server successful! Running on port 4000")
})