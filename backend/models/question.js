const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question
