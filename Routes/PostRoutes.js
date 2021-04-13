const router = require('express').Router();
const controller = require('../Controllers/PostController')
const { isValidToken } = require('../middleware/JwtUtil');

router.get('/getSomePosts', controller.getSomePosts);

router.post('/addNewPost', isValidToken,controller.addNewPost);

router.delete('/deletePost/:postId', isValidToken,controller.deletePost);

module.exports = router
