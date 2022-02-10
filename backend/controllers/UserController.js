const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    console.log(req.query.user)
    const token = jwt.sign({ user: req.params.user, email: req.params.email }, process.env.KEY, { expiresIn: 3600 })
    const response = {
        user: req.params.user,
        email: req.params.email,
        token
    }
    return res.json(response)
}

module.exports = { login }
