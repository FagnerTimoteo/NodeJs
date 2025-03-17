const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");

router.post("/Usuario", usuarioController.create);

router.post("/Usuario/login", usuarioController.login);

module.exports = router;
