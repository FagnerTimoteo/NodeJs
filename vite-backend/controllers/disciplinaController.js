const Disciplina = require("../models/Disciplina")

const disciplinaController = {
    create: async (req, res) => {
        try {
            const disciplina = {
                nome: req.body.nome,
                cargaHoraria: req.body.cargaHoraria
            }

            const response = await Disciplina.create(disciplina)
            res.status(201).json({response, msg:"U"})
        } catch (error) {
            console.log(error)
        }
    },

    readAll: async (req, res) => {
        let results = await Disciplina.find({})
        res.send(results).status(200)
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            const nome = req.body.nome
            const cargaHoraria = req.body.cargaHoraria

            const disciplina = await Disciplina.findByIdAndUpdate(
                id,
                { nome: nome },
                { cargaHoraria: cargaHoraria },
                { new: true }
            );
            
            res.send(disciplina).status(200)
        } catch (err) {
            console.log(err)
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id
            await Disciplina.deleteOne({ _id: id }) // Espera apagar
            res.status(200).json({ message: 'Disciplina deletada com sucesso!' }) // Envia resposta
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar disciplina' }) // Responde erro
        }
    }
}

module.exports = disciplinaController;