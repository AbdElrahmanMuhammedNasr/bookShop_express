const router = require('express').Router()
const controller = require('../Controllers/BookController')
const { isValidToken } = require('../middleware/JwtUtil');

router.post('/addBook',isValidToken,controller.addNewBook)
router.post('/getBestBook',controller.getBestBooks)
router.post('/getNewBook',controller.getNewBooks)

module .exports = router
