const mongoose = require("mongoose");

async function main(){
    try {
        //Retringe que dados não especificados no modelo não sejam enviado para o banco
        mongoose.set("strictQuery",true);
        //String de conexão
        await mongoose.connect('mongodb://127.0.0.1:27017/banco');
        //Apresenta a mensagem de conexão com a base banco
        console.log("conectado ao mongodb");
    } catch (error) {
        //Captura e exibe alguma exceção que ocorrer
        console.log(`Error: ${error}`);
    }
}

module.exports = main;