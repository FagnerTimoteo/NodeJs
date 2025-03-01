const mongoose = require("mongoose");
const{Schema} = mongoose;

const alunoSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    dataNascimento: {
        type: Date,
        require: true
    },
    matricula: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    curso: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Aluno", alunoSchema);