const mongoose = require("mongoose");
const { Schema } = mongoose;

const disciplinaSchema  = new Schema({
    nome: {
        type: String,
        require: true
    },
    cargaHoraria: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Disciplina", disciplinaSchema);