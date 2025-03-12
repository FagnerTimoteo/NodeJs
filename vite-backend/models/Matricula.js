const mongoose = require('mongoose')
const { Schema } = mongoose

const MatriculaSchema = new Schema({
    alunoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Aluno'
    },
    disciplinaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Disciplina'
    }
})

const Matricula = mongoose.model('Matricula', MatriculaSchema)
module.exports = Matricula