'use strict'

const service = require('./register.service')

const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body

    const added = await service.addUser(firstName, lastName, email, password)

    return res.send(added)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  registerUser,
}
