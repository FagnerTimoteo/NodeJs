const mongoose = require('mongoose')
const { Schema } = mongoose

const AlunoDisciplinaSchema = new Schema({
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

const AlunoDisciplina = mongoose.model('AlunoDisciplina', AlunoDisciplinaSchema)
module.exports = AlunoDisciplina