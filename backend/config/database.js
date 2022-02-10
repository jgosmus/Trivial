const mongoose = require('mongoose')

const dbString = 'mongodb://127.0.0.1:27017/trivial'

mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose
