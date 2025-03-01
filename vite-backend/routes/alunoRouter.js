const router = require("express").Router()
const alunoController = require("../controllers/alunoController");

    router.post("/Aluno", async (req, res) => { alunoController.create(req, res) });
  
    router.get("/", async (req, res) => {
    });

module.exports = router