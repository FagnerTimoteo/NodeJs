const router = require("express").Router()
const disciplinaController = require("../controllers/disciplinaController");

router.route("/Disciplinas").post((req, res) => disciplinaController.create(req, res))

router.route("/Disciplinas/all").get((req, res) => disciplinaController.readAll(req, res))
  
router.route("/disciplina/find/:id").get((req, res) => disciplinaController.read(req, res))

router.route("/disciplina/update/:id").post((req, res) => disciplinaController.update(req, res))

router.route("/Disciplinas/delete/:id").post((req, res) => disciplinaController.delete(req, res))

module.exports = router