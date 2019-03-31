'use strict'

/**
 *
 * @param {Object} user User to add to database
 *
 * @returns {Pormise} Was user succesfully saved
 *
 * @description Creates mongodb user and attempts to save it
 */
const createUser = user => {
  const userToAdd = new USERS(user)

  return userToAdd.save()
}

/**
 *
 * @param {String} email Email of user you weant to find
 *
 * @returns {Promise} Found user in db
 *
 * @description Find user in mongo db by email
 */
const findUserByEmail = email => USERS.findOne({ email }).lean().exec()

module.exports = {
  createUser,
  findUserByEmail,
}
