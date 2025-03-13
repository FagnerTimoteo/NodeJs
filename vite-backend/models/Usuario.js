const mongoose = require("mongoose");
const{Schema} = mongoose;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Usuario", usuarioSchema);