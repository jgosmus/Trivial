const { startGame } = require('../services/QuestionService')

const getQuestion = async (req, res) => {
    // const number = await Question.countDocuments().exec()
    // const random = Math.floor(Math.random() * number)

    // const question = await Question.findOne().skip(random).exec()

    startGame((result) => {
        console.log(result)
        res.json(result)
    })
}

const save = async (req, res) => {
    return res.json({ question: 'Question to ask' })
}

module.exports = { getQuestion, save }
