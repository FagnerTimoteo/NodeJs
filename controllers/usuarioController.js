const Usuario = require("../models/Usuario")
const crypto = require("crypto");

const usuarioController = {
    create: async (req, res) => {
        const nome = req.body.nome

        try {
            const usuario = {
                nome: nome,
                senha: hash(req.body.senha)
            };

            const usuarioExiste = await Usuario.findOne({ nome });
            if (usuarioExiste) {
                return res.status(404).json({ msg: "Já existe um usuario com esse nome" });
            }
    
            const response = await Usuario.create(usuario);
    
            response.senha = undefined;
    
            res.status(201).json({ response, msg: "Cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Algo deu errado!" });
        }
    },


    login: async (req, res) => {
        try {
            const { nome, senha } = req.body;
        
            const usuario = await Usuario.findOne({ nome });
            if (!usuario) {
                return res.status(404).json({ msg: "Usuário não encontrado!" });
            }
        
            if (hash(senha) === usuario.senha) {
                const token = hash(nome + usuario.senha);

                return res.status(200).json({
                    msg: "Login realizado com sucesso!",
                    nome,
                    token
                });
            } else {
                return res.status(401).json({ msg: "Senha inválida!" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro no servidor!" });
        }
    }
};

function hash(senha) {
    return crypto.createHash("sha256").update(senha).digest("hex");
}


module.exports = usuarioController;