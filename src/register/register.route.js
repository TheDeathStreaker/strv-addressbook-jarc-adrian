'use strict'

const router = require('express').Router()
const controller = require('./register.controller')

router.post('/add', controller.registerUser)

module.exports = router
