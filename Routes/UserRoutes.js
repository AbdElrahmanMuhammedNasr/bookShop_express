const router = require('express').Router()
const  controller = require('../Controllers/UserController')
const { isValidToken } = require('../middleware/JwtUtil');

router.get('/getUser/:id', controller.getUser);
router.post('/addUser', controller.addUser);
router.delete('/deleteUser', isValidToken,controller.deleteUser)


module .exports = router
