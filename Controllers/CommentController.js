const Comment = require('../DatabaseSchema/comments')

exports.addNewComment = async (req, res, next) => {
    const commentBody = req.body;
    const comment = new Comment({
        ...commentBody,
        created: new Date()
    })
    const result = await comment.save();

    res.status(200).json(result)

}

exports.getComments = async (req, res, next) => {
    const {postId, limit} = req.params
    const result = await Comment
        .find({"postId": postId}, '-__v')
        .populate('userId', 'name')
        .limit(parseInt(limit))
    if (result === null) {
        return res.status(200).json([]);
    }

    res.status(200).json(result);


}
exports.deleteComment = async (req, res, next) => {
    const {userId} = req.user
    const {commentId} = req.params

    const result = await Comment
        .findOne({'_id': commentId})
        .populate({'userId': userId});

    if (result._id == result.userId._id) {
        const deleted = await Comment.findOneAndDelete({'_id': commentId})
        res.status(200).json(deleted)
    } else {
        res.status(200).json({
            message: 'can not delete'
        })

    }


}
