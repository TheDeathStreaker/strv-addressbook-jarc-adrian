'use strict'

const chai = require('chai')
const registerService = require('../../src/register/register.service')

describe('Test login service', () => {
  it('should throw error if no email', () => {
    chai.assert.throws(registerService.checkEmail, 'Email is required')
  })

  it('should throw error if invalid email', () => {
    const email = 'test'
    const emailFn = () => registerService.checkEmail(email)
    chai.assert.throws(emailFn, `${email} is not an email`)
  })

  it('should throw error if no password', () => {
    chai.assert.throws(registerService.checkPassword, 'Password is required')
  })

  it('should throw error if too short password', () => {
    const password = 'test'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must be atleast 8 characters long')
  })
})
