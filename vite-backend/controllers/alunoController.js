const { response } = require("express");
const Aluno = require("../models/Aluno")
const crypto = require("crypto");

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
                senha: hash(req.body.senha)
            };

            const alunoExiste = await Aluno.findOne({ nome });
            if (alunoExiste) {z
                return res.status(404).json({ msg: "Já existe um aluno com esse nome" });
            }
    
            const response = await Aluno.create(aluno);
    
            response.senha = undefined;
    
            res.status(201).json({ response, msg: "Aluno cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado!" });
        }
    },

    find: async (req, res) => {
        const id = req.params.id;
                
        const response = await Aluno.findById(id)
            .select('-__v')
            .select('-_id')
            .select('-senha')

        res.status(200).json(response);
    },
    
    readAll: async (req, res) => {
        try {
            let response = await Aluno.find()
                .select('-senha')
                .select('-endereco')

            res.status(200).json(response);
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            res.status(500).json({ error: "Erro ao buscar alunos" });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            let { nome, endereco, dataNascimento, matricula, telefone, email, curso, senha } = req.body;
    
            const updateData = { nome, endereco, dataNascimento, matricula, telefone, email, curso };
    
            if (senha) { // Apenas atualiza se a senha não estiver em branco
                updateData.senha = hash(senha); 
            }
    
            const aluno = await Aluno.findByIdAndUpdate(id, updateData, { new: true });
    
            if (!aluno) {
                return res.status(404).send({ error: "Aluno não encontrado" });
            }
    
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

    login: async (req, res) => {
        try {
            const { nome, senha } = req.body;
        
            const aluno = await Aluno.findOne({ nome });
            if (!aluno) {
                return res.status(404).json({ msg: "Aluno não encontrado!" });
            }
        
            if (hash(senha) === aluno.senha) {
                return res.status(200).json({
                    msg: "Login realizado com sucesso!",
                    id: aluno.id 
                });
            } else {
                return res.status(401).json({ msg: "Senha inválida!" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor!" });
        }
    }
}

function hash(senha) {
    return crypto.createHash("sha256").update(senha).digest("hex");
}

module.exports = alunoController;