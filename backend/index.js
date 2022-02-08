const express = require('express')
const session = require('express-session')
const routes = require('./routes/routes')
const app = express()

app.use(express.static('public'))
require("./config/database")

app.use(session({
    secret: 'ci13k193j342j27882j4',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24}   //un dia
}))

app.use('/', routes)

app.listen(5000)