const router = require('express').Router()
const controller = require('../Controllers/CommentController')
const { isValidToken } = require('../middleware/JwtUtil');

router.get('/getComments/:postId/:limit', controller.getComments);
router.post('/addComment', isValidToken,controller.addNewComment)
router.delete('/deleteComment/:commentId', isValidToken,controller.deleteComment)

module.exports = router
