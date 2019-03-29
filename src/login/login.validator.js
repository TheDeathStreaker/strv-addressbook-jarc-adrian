'use strict'

const service = require('./login.service')

const check = (req, res, next) => {
  const {
    email,
    password,
  } = req.body

  try {
    service.checkEmail(email)
    service.checkPassword(password)

    return next()
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  check,
}
