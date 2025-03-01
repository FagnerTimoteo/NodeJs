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

    read: async (req, res) => {

    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {

    },
}

module.exports = disciplinaController;