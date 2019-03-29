'use strict'

const service = require('./contacts.service')

const login = async (req, res, next) => {
  try {
    return res.send(req.user)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  login,
}
