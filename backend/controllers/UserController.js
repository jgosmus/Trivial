const jwt = require('jsonwebtoken')
const { register } = require('../services/UserService')

const login = async (req, res) => {
    const user = req.params.user
    const email = req.params.email

    const token = jwt.sign({ user, email }, process.env.KEY, { expiresIn: 3600 })
    const response = {
        user,
        email,
        token
    }

    register({ user, email })

    return res.json(response)
}

module.exports = { login }
