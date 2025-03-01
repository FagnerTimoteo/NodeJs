const router = require("express").Router()
const servicesRouter = require("./users");
const alunoRouter = require("./alunoRouter")

const disciplinaRouter = require("./disciplinaRouter")

router.use("/", servicesRouter)
router.use("/", alunoRouter)
router.use("/", disciplinaRouter)

module.exports = router;