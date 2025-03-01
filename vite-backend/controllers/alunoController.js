const Aluno = require("../models/Aluno")

const alunoController = {
    create: async (req, res) => {
        try {
            const aluno = {
                name: req.body.nome,
                endereco: req.body.endereco,
                dataNascimento: req.body.dataNascimento,
                matricula: req.body.matricula,
                telefone: req.body.telefone,
                email: req.body.email,
                curso: req.body.curso
            }

            const response = await Aluno.create(aluno)
            res.status(201).json({response, msg:"U"})
        } catch (error) {
            console.log(error)
        }
    },

    read: async (req, res) => {

    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {

    },
}

module.exports = alunoController;