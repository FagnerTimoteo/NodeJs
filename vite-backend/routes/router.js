const router = require("express").Router()
const servicesRouter = require("./users");
const alunoRouter = require("./alunoRouter")
const disciplinaRouter = require("./disciplinaRouter")
const alunoDisciplina = require("./alunoDisciplinaRouter")

router.use("/", servicesRouter)
router.use("/", alunoRouter)
router.use("/", disciplinaRouter)
router.use("/", alunoDisciplina)

module.exports = router;