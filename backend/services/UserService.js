const User = require('../models/user')

const register = async (user) => {
    const userModel = new User({ name: user.user, email: user.email })
    userModel.save()
}

module.exports = { register }
