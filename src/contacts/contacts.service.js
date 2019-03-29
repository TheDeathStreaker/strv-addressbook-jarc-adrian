'use strict'

const _ = require('lodash')
const isEmail = require('validator/lib/isEmail')
const errorGenerator = require('../errorGenerator')
const firebase = require('../firebase')


const checkEmail = email => {
  if (_.isUndefined(email)) {
    throw errorGenerator.badRequest('Email is required')
  }

  if (!isEmail(email)) {
    throw errorGenerator.badRequest(`${email} is not an email`)
  }
}

const checkIfDefined = (value, type) => {
  if (_.isUndefined(value)) {
    throw errorGenerator.badRequest(`${type} is required`)
  }
}

const addContact = async (user, contact) => {
  const {
    email,
  } = user

  const propertyName = contact.name
  + contact.lastName
  + contact.email.replace(/\p{P}|\p{S}/ug, '_')

  const toAdd = {}
  toAdd[propertyName] = contact

  await firebase.addToFirebase(toAdd, email)

  return {
    status: 'OK',
  }
}

module.exports = {
  checkEmail,
  checkIfDefined,
  addContact,
}
