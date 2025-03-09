const mongoose = require('mongoose')
const { Schema } = mongoose

const MatriculaSchema = new Schema({
    alunoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Aluno' // Se quiser popular depois
    },
    disciplinaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Disciplina' // Se quiser popular depois
    }
})

const Matricula = mongoose.model('Matricula', MatriculaSchema)
module.exports = Matricula