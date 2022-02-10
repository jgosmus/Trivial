const auth = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(403).send('Access denied')
    }
    return next()
}

module.exports = { auth }
