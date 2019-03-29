'use strict'

const _ = require('lodash')
const isEmail = require('validator/lib/isEmail')
const errorGenerator = require('../errorGenerator')
const crypto = require('../encryption')
const jwt = require('../jwt')
const db = require('../DAL/db')


const checkEmail = email => {
  if (_.isUndefined(email)) {
    throw errorGenerator.badRequest('Email is required')
  }

  if (!isEmail(email)) {
    throw errorGenerator.badRequest(`${email} is not an email`)
  }
}

const checkPassword = password => {
  if (_.isUndefined(password)) {
    throw errorGenerator.badRequest('Password is required')
  }

  if (password.length < 8) {
    throw errorGenerator.badRequest('Password must be atleast 8 characters long')
  }
}

const login = async (email, password) => {
  const user = await db.users.findUserByEmail(email)

  const passwordCorrect = await crypto.verifyPassword(user.password, password)

  if (!passwordCorrect) {
    throw errorGenerator.unauthorized('Password incorrect')
  }

  return {
    token: jwt.createJWT(user),
  }
}

module.exports = {
  checkEmail,
  checkPassword,
  login,
}
