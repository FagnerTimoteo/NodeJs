const router = require("express").Router()
const servicesRouter = require("./users");
const alunoRouter = require("./alunoRouter")

router.use("/", servicesRouter)
router.use("/", alunoRouter)

module.exports = router;