const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Chama da string de conexão da base de dados
const conn = require("./database/conn")
conn();

//routes
const routes = require("./routes/router");
app.use("/api", routes);

//Porta de comunicação
const port = 3000;
app.listen(port, function(){
    console.log("Servidor ativo.");
})
