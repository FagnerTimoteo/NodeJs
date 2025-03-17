const router = require("express").Router()
const alunoController = require("../controllers/alunoController");

    router.post("/Aluno", async (req, res) => { alunoController.create(req, res) });

    router.route("/Aluno/all").get((req, res) => alunoController.readAll(req, res));

    router.route("/Aluno/find/:id").get((req, res) => alunoController.find(req, res));
    
    router.route("/Aluno/update/:id").put((req, res) => alunoController.update(req, res))

    router.route("/Aluno/delete/:id").delete((req, res) => alunoController.delete(req, res))

module.exports = router