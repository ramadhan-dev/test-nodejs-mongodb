const express = require("express")
const postController = require("./../controllers/postController")
const router = express.Router()
const {postMiddleware} = require("./../middlewares/postMiddleware")
const {secondMiddleware} = require("./../middlewares/secondMiddleware")
const validation = require("./../validators/post")


router.get("/", [postMiddleware] , postController.getPost)
router.get("/:id", postController.pagePost)
router.post("/", [postMiddleware, secondMiddleware ,validation.createPost], postController.createPost)


module.exports = router

