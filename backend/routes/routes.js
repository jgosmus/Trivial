const express = require('express')
const router = express.Router()
const QuestionController = require('../controllers/QuestionController')
const UserController = require('../controllers/UserController')

router.get('/api', QuestionController.token)
router.get('/api/test', QuestionController.testToken)
router.get('/api/register/:user/:email', UserController.save)
router.get('/api/question', QuestionController.save)
router.get('/api/checkanswer/:num', QuestionController.save)
router.get('/api/results', QuestionController.save)

module.exports = router
