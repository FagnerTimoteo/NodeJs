const crypto = require("crypto");
const Usuario = require("../models/Usuario");

module.exports = async (req, res, next) => {
    const { token } = req.params;

    if (!token)
        return res.status(401).json({ msg: "Acesso negado! Token não fornecido." });

    try {
        const usuarios = await Usuario.find();
        
        for (const usuario of usuarios) {
            if (hash(usuario.nome + usuario.senha) === token) {
                req.user = usuario;
                return next();
            }
        }

        res.status(403).json({ msg: "Token inválido!" });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao validar token!" });
    }
};

function hash(senha) {
    return crypto.createHash("sha256").update(senha).digest("hex");
}
