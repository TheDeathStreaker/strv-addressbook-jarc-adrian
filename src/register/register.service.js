'use strict'

const _ = require('lodash')
const errorGenerator = require('../errorGenerator')

const checkUsername = username => {
  if (_.isUndefined(username)) {
    throw errorGenerator.badRequest('Username is required')
  }
}

const checkPassword = password => {
  if (_.isUndefined(password)) {
    throw errorGenerator.badRequest('Password is required')
  }

  if (password.length < 8) {
    throw errorGenerator.badRequest('Password too short')
  }
}

const addUser = (username, password) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 4000)

    if (rand % 2 === 0) {
      console.log(`User ${username} with password ${password} added`)

      return resolve({
        id: '1234',
      })
    }
    return reject(errorGenerator.badRequest(`User ${username} already exists`))
  }, 300)
})

module.exports = {
  checkUsername,
  checkPassword,
  addUser,
}
