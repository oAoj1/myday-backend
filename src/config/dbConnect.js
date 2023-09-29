const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joao:123@cluster0.mw2yycj.mongodb.net/dia-dia')

let db = mongoose.connection

module.exports = db