const router = require("express").Router()
const matriculaController = require("../controllers/matriculaController")

router.route("/Matriculas").post((req, res) => matriculaController.create(req, res))

//router.route("/Matriculas/:id").post((req, res) => matriculaController.return(req, res))

router.route("/Matriculas/all").get((req, res) => matriculaController.readAll(req, res))
router.route("/Matriculas/all/:id").post((req, res) => matriculaController.readAllByAlunoId(req, res))

router.route("/Matriculas/update/:id").post((req, res) => matriculaController.update(req, res))

router.route("/Matriculas/delete/:id").post((req, res) => matriculaController.delete(req, res))

module.exports = router