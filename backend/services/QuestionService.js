const Question = require('../models/question')

const startGame = (callback) => {
    Question.find({}).exec((_, result) => {
        callback(result)
    })
}

module.exports = { startGame }
