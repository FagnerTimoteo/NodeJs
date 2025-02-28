const router = require("express").Router()
const servicesRouter = require("./users");

router.use("/", servicesRouter)

module.exports = router;