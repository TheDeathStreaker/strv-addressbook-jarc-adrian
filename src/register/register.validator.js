'use strict'

const service = require('./register.service')

const addUser = (req, res, next) => {
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
  addUser,
}
