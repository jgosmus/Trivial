// const jwt = require('jsonwebtoken');

class QuestionController {
    async save (req, res) {
        return res.status(200).send('Question to ask')
    }
}

module.exports = new QuestionController()
