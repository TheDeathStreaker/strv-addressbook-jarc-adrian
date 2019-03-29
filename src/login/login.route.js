'use strict'

const express = require('express')
const controller = require('./login.controller')
const validators = require('./login.validator')

const router = new express.Router()

router.post('/login', validators.check, controller.login)

module.exports = router
