'use strict'

const express = require('express')
const controller = require('./register.controller')
const validators = require('./register.validator')

const router = new express.Router()

router.post('/register', validators.addUser, controller.registerUser)

module.exports = router
