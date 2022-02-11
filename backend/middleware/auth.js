const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        return res.status(401).send({ error: 'Error: Access denied' })
    }

    try {
        const token = bearer.split(' ')[1]
        const verified = jwt.verify(token, process.env.KEY)
        req.user = verified

        const user = await User.findOne({ email: req.user.email })
        if (!user) throw new Error('Invalid user')

        return next()
    } catch (error) {
        return res.status(400).json({ error: error.toString() })
    }
}

module.exports = { auth }
