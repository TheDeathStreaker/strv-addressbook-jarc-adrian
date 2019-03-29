'use strict'

const service = require('./contacts.service')

const check = (req, res, next) => {
  const {
    name,
    lastName,
    email,
  } = req.body

  try {
    service.checkIfDefined(name, 'name')
    service.checkIfDefined(lastName, 'lastName')
    service.checkEmail(email)

    return next()
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  check,
}
