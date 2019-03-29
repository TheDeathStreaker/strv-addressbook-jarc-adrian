'use strict'

const createUser = user => {
  const userToAdd = new USERS(user)

  return userToAdd.save()
}

const findUserByEmail = email => USERS.findOne({ email }).lean().exec()

module.exports = {
  createUser,
  findUserByEmail,
}
