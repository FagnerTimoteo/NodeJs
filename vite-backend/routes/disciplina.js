const router = require("express").Router()
const disciplinaController = require("../controllers/disciplinaController");

router.route("/disciplina").post((req, res) => disciplinaController.create(req, res))

router.route("/disciplina/find/:id").get((req, res) => disciplinaController.read(req, res))

router.route("/disciplina/update/:id").post((req, res) => disciplinaController.update(req, res))

router.route("/disciplina/delete/:id").post((req, res) => disciplinaController.delete(req, res))

module.exports = router