const express = require('express')
const routes = require('./routes/routes')
const dotenv = require('dotenv')
const app = express()

app.use(express.static('public'))
require('./config/database')
dotenv.config()

app.use('/', routes)

app.listen(5000)
