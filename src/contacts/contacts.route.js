'use strict'

const express = require('express')
const controller = require('./contacts.controller')
const validators = require('./contacts.validator')

const router = new express.Router()

router.post('/', validators.check, controller.login)

module.exports = router
