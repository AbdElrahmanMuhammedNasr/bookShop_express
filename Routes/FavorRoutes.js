const router = require('express').Router()
const controller = require('../Controllers/FavoraiteController')
const { isValidToken } = require('../middleware/JwtUtil');

router.post('/addFavor',isValidToken,controller.addToFavor)
router.get('/getFavor',isValidToken,controller.getFavorUser)
module .exports = router
