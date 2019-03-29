'use strict'

const service = require('./register.service')

const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    } = req.body

    const added = await service.addUser(email, password, {
      firstName,
      lastName,
      phoneNumber,
    })

    return res.send(added)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  registerUser,
}
