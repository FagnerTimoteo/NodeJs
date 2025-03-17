const mongoose = require('mongoose')
const { Schema } = mongoose

const MatriculaSchema = new Schema({
    alunoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    disciplinaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})

const Matricula = mongoose.model('Matricula', MatriculaSchema)
module.exports = Matricula