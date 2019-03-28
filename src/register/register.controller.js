'use strict'

const service = require('./register.service')

const registerUser = async (req, res, next) => {
  try {
    const {
      username,
      password,
    } = req.body

    service.checkUsername(username)
    service.checkPassword(password)

    const added = await service.addUser(username, password)

    return res.send(added)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  registerUser,
}
