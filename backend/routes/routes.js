const express = require('express')
const router = express.Router()
const { save } = require('../controllers/QuestionController')
const { login } = require('../controllers/UserController')
const { auth } = require('../middleware/auth')
const { getQuestion } = require('../controllers/QuestionController')

router.get('/api/login/:user/:email', login)
router.get('/api/question', getQuestion)
router.get('/api/checkanswer/:num', auth, save)
router.get('/api/results', auth, save)

module.exports = router
