const User = require('../DatabaseSchema/user');
const {generateToken} = require('../middleware/JwtUtil');
const bycrpt = require('bcryptjs')

exports.login = async (req, res, next) => {

    const {email, password} = req.body

    const user = await User.findOne({'email': email});

    if (user === null) {
        res.status(401).json({
            message: 'wrong Password or Email'
        })
    }


    const validPass = await bycrpt.compare(password, user.password);

    if (validPass === true) {
        const token = generateToken(user.email, user.name, user._id)
        res.status(200).json({
            token,
        })
    } else {
        res.status(401).json({
            message: 'Wrong Password or Email'
        })
    }


}

