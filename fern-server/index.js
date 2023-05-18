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
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fern-db"
})
//getting the food categories
app.get("/fern-api/categories", (req,res) =>{  
    
    const sql = "SELECT * FROM food_categories"
    db.query(sql,(err,data) =>{
        if(err) throw err
        res.json(data)
    })
})
//getting dishes by category
app.get("/fern-api/dishes/:category", (req,res) =>{ 

    const category = req.params.category
    sql = "SELECT * FROM menu WHERE Category = (SELECT Category_id FROM food_categories WHERE Category LIKE ? )"
    
    db.query(sql, category, (err,data) =>{
        if(err) throw err
        res.json(data)
    })
})
//Listening on port 4000
app.listen(4000, function(){
    console.log("Connection to server successful! Running on port 4000")
})