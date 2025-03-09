const router = require("express").Router()
const servicesRouter = require("./users");
const alunoRouter = require("./alunoRouter")
const disciplinaRouter = require("./disciplinaRouter")
const matricula = require("./matriculaRouter")

router.use("/", servicesRouter)
router.use("/", alunoRouter)
router.use("/", disciplinaRouter)
router.use("/", matricula)

module.exports = router;