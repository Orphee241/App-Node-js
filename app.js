const express = require("express");
const mysql = require("mysql")
const myConnection = require("express-myconnection")
const bodyParser = require("body-parser")
const {check, validationResult, body} = require("express-validator");
const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false})

// Config connection database
const configDb = {
    host: "localhost",
    database: "test",
    port: 3306, 
    user: "root",
    password: ""

}



app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(myConnection(mysql,configDb, "pool"))



app.set("view engine", "ejs")
app.set("views", "view")

let title = "Bienvenu"

app.get("/", (req, res)=>{
    res.status(200).render("index", {title})
  
})





app.get("/add_product", (req, res)=>{

    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }
        else{
            connection.query("SELECT * FROM data", [], (erreur,resultats)=>{
                if(erreur){
                    console.log(erreur)
                }
                else{
                
                    res.status(200).render("add_product", {resultats})
                }
            })
        }
    })
})


app.post("/add_product", (req, res)=>{

    let titre = req.body.titre
    let description = req.body.desc

    req.getConnection((erreur,connection)=>{
        if(erreur){
            console.log(erreur)
        }
        else{
            connection.query("INSERT INTO data (id, titre, description) VALUES(?,?,?)", [
                null, titre, description
            ], 
            (erreur,resultat)=>{
                if(erreur){
                    console.log(erreur)
                }
                else{
                
                    res.status(300).redirect("add_product")
                }
            })
        }
    })
})



app.listen(8000, () =>{
    console.log("Connexion")
})