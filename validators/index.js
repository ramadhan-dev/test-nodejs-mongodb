const express = require("express")
const app = express()
const expressValidator = require("express-validator")
const User = require("./../models/register")

app.use(expressValidator());
module.exports = app