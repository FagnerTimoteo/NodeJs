const router = require("express").Router()
const userController = require("../controllers/userController");

router.route("/users/all").get((req, res) => userController.readAll(req, res))

router.route("/users/find/:id").get((req, res) => userController.find(req, res))

router.route("/users/delete/:id").post((req, res) => userController.delete(req, res))

router.route("/users/update/:id").post((req, res) => userController.update(req, res))

module.exports = router