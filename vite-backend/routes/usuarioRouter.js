const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");
const authMiddleware = require("../middlewares/authMiddleware");

// Rotas públicas
router.post("/Usuario", usuarioController.create);
router.post("/Usuario/login", usuarioController.login);

// Rotas protegidas
router.get("/:token/Aluno/Matricula/Listar/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        
        // Buscar a matrícula no banco de dados
        const matricula = await Matricula.findById(id);

        if (!matricula) {
            return res.status(404).json({ msg: "Matrícula não encontrada!" });
        }

        res.status(200).json(matricula);
    } catch (error) {
        res.status(500).json({ msg: "Erro ao buscar matrícula!" });
    }
});

module.exports = router;
