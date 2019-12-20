const express = require("express")
const router = express.Router()
const registerController = require("./../controllers/registerController")
const validation = require("./../validators/register")

router.post("/", registerController.store)

module.exports = router

