'use strict'

const service = require('./login.service')

const login = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body

    const token = await service.login(email, password)

    return res.send(token)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  login,
}
