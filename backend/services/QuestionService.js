const Question = require('../models/question')

const startGame = async () => {
    const result = await Question.find({})
    return result
}

module.exports = { startGame }
