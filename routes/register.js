const express = require("express")
const router = express.Router()
const registerController = require("./../controllers/registerController")
const {
    createUser
} = require("./../validators/register")

router.post("/", createUser, registerController.store)

module.exports = router