const router = require("express").Router()
const usuarioController = require("../controllers/usuarioController");

    router.post("/Usuario", async (req, res) => { usuarioController.create(req, res) })

    router.route("/Usuario/login").post((req, res) => usuarioController.login(req, res))

module.exports = router