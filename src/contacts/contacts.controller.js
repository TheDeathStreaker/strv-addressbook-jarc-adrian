'use strict'

const service = require('./contacts.service')

const login = async (req, res, next) => {
  try {
    const {
      user,
      body,
    } = req

    const response = await service.addContact(user, body)

    return res.send(response)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  login,
}
