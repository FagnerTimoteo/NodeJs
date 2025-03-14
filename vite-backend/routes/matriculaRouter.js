const router = require("express").Router()
const matriculaController = require("../controllers/matriculaController")

router.route("/Matricula").post((req, res) => matriculaController.create(req, res))

router.route("/Matricula/all").get((req, res) => matriculaController.readAll(req, res))

router.route("/Matricula/all/:id").get((req, res) => matriculaController.readAllByAlunoId(req, res))

router.route("/Matricula/delete/:id").delete((req, res) => matriculaController.delete(req, res))

module.exports = router