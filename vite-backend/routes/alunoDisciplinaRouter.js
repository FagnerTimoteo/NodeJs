const router = require("express").Router()
const alunoDisciplinaController = require("../controllers/alunoDisciplinaController")

router.route("/AlunoDisciplinas").post((req, res) => alunoDisciplinaController.create(req, res))

router.route("/AlunoDisciplinas/:id").post((req, res) => alunoDisciplinaController.return(req, res))

router.route("/AlunoDisciplinas/all").get((req, res) => alunoDisciplinaController.readAll(req, res))

router.route("/AlunoDisciplinas/update/:id").post((req, res) => alunoDisciplinaController.update(req, res))

router.route("/AlunoDisciplinas/delete/:id").post((req, res) => alunoDisciplinaController.delete(req, res))

module.exports = router