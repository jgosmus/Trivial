// const jwt = require('jsonwebtoken');

const getQuestion = async (req, res) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(403).send('Access denied')
    }
    return res.status(200).send('Question to ask')
}

const save = async (req, res) => {
    return res.status(200).send('Question to ask')
}

module.exports = { getQuestion, save }
