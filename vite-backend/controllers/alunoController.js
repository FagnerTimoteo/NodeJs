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
    

    readAll: async(req, res) => {
        let results = await Aluno.find({})
        res.send(results).status(200)
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            const nome = req.body.nome
            const endereco = req.body.endereco
            const dataNascimento = req.body.dataNascimento
            const matricula = req.body.matricula
            const telefone = req.body.telefone
            const email = req.body.email
            const curso = req.body.curso

            const aluno = await Aluno.findByIdAndUpdate(
                id,
                { nome: nome },
                { endereco: endereco },
                { dataNascimento: dataNascimento },
                { matricula: matricula },
                { telefone: telefone},
                { email: email },
                { curso: curso },
                { new: true }
            );
            
            res.send(aluno).status(200)
        } catch (err) {
            console.log(err)
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