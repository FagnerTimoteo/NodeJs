const Aluno = require("../models/Aluno")

const alunoController = {
    create: async (req, res) => {
        try {
            const aluno = {
                nome: req.body.nome,
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

    readAll: async(req, res) => {
        let results = await Aluno.find({})
        res.send(results).status(200)
    },

    read: async (req, res) => {

    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {
        try {
            const id = req.params.id
            await Aluno.deleteOne({_id: id})
            res.status(200).json({ message: 'Aluno deletado com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar aluno' })
        }
    }
}

module.exports = alunoController;