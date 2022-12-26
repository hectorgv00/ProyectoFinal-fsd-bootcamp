const colors = require("colors");
const express = require("express");
const app = express();
const db = require("./db/db");
const { sequelize } = require('./models');
const router = require("./router");
const cors = require("cors");

//Config Cors Options
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Selecting a Port

const PORT = 3001;

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgGreen.red);

    sequelize.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});