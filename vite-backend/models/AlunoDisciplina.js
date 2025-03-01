const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alunoDisciplinaSchema = new Schema({
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' },
    disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' },
    nota: Number,
    semestre: String
});

module.exports = mongoose.model("AlunoDisciplina", alunoDisciplinaSchema);