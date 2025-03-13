const router = require("express").Router()
const usuarioRouter = require("./usuarioRouter")
const alunoRouter = require("./alunoRouter")
const disciplinaRouter = require("./disciplinaRouter")
const matricula = require("./matriculaRouter")

router.use("/", usuarioRouter)
router.use("/", alunoRouter)
router.use("/", disciplinaRouter)
router.use("/", matricula)

module.exports = router;