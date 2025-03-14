const Aluno = require("../models/Aluno")

const alunoController = {
    create: async (req, res) => {
        const nome = req.body.nome

        try {
            const aluno = {
                nome: nome,
                endereco: req.body.endereco,
                dataNascimento: req.body.dataNascimento,
                matricula: req.body.matricula,
                telefone: req.body.telefone,
                email: req.body.email,
                curso: req.body.curso,
            };

            const response = await Aluno.create(aluno);
    
            res.status(201).json({ response, msg: "Aluno cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado!" });
        }
    },

    find: async (req, res) => {
        const id = req.params.id;
                
        const response = await Aluno.findById(id)

        res.status(200).json(response);
    },
    
    readAll: async (req, res) => {
        try {
            let response = await Aluno.find()

            res.status(200).json(response);
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            res.status(500).json({ error: "Erro ao buscar alunos" });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            let { nome, endereco, dataNascimento, matricula, telefone, email, curso } = req.body;
    
            const updateData = { nome, endereco, dataNascimento, matricula, telefone, email, curso };
    
            const aluno = await Aluno.findByIdAndUpdate(id, updateData, { new: true });
    
            res.status(200).send(aluno);
        } catch (err) {
            console.error("Erro ao atualizar aluno:", err);
            res.status(500).send({ error: "Erro interno do servidor" });
        }
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
    },
}

module.exports = alunoController;