# App-Node-js

Pour faire fonctionner l'application, il faut au préalable installer node js.

//Modules node js à installer
- Express js
- Mysql
- Express-myconnection (pour réaliser la connection à la base de donnée)
- ejs (moteur de template)

Pour installer un module on effectue la commande suivante:
npm install nom du module

Après installation de mysql et express-myconnection, on créé des constantes dans un ficher app.js que nous créerons nous-mêmes pour les inclure.

const mysql = require("mysql")
const myConnection = require(express-myconnection)

Pour se connecter à la base de donner on procède de la manière suivante:
app.use(myConnection(mysql,optionBDD, "pool")

NB: Tout ceci se fait après avoir créer l'application avec express dans le fichier app.js

const express = require(express) // Inclusion d'express

const app = express(); // Création de notre application
const port = 3000 

app.listen(port) //port du server

Pour lancer l'application tapez la commande suivante:
npm start
