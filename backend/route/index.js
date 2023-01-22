const express = require('express')
const { annoteRouter } = require('./annote.js')

const route = express.Router()

route.use('/annote', annoteRouter)

module.exports = {
    route
}