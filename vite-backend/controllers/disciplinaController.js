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

    find: async (req, res) => {
        const id = req.params.id;

        const results = await Disciplina.findOne({id});
        res.status(200).json(results);
    },

    readAll: async (req, res) => {
        try {
            let results = await Disciplina.find({});
            res.status(200).json(results);
        } catch (error) {
            res.status(500).send({ error: "Erro ao buscar disciplinas" });
        }
    },    

    update: async (req, res) => {
        try {
            const id = req.params.id;
    
            const { nome, cargaHoraria } = req.body;
    
            const disciplina = await Disciplina.findByIdAndUpdate(
                id,
                { nome, cargaHoraria },
                { new: true }
            );
    
            res.status(200).send(disciplina);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: "Erro ao atualizar disciplina" });
        }
    },
    

    delete: async (req, res) => {
        try {
            const id = req.params.id
            await Disciplina.deleteOne({ _id: id })
            res.status(200).json({ message: 'Disciplina deletada com sucesso!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar disciplina' })
        }
    }
}

module.exports = disciplinaController;