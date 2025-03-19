require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Conectado ao MongoDB Atlas!");
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    }
}

module.exports = main;
