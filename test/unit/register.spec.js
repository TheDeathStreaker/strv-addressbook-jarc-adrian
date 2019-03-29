'use strict'

const chai = require('chai')
const registerService = require('../../src/register/register.service')

describe('Test register service', () => {
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

  it('should throw error if only lowercase', () => {
    const password = 'testtest'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if only uppercase', () => {
    const password = 'TESTTEST'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if only numbers', () => {
    const password = '12345678'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if only special', () => {
    const password = '!"#$%&/('
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if lowercase and number', () => {
    const password = 't3stt3st'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if lowercase and special', () => {
    const password = 'te$tte$t'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if lowercase and uppercase', () => {
    const password = 'teStteSt'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })


  it('should throw error if uppercase and number', () => {
    const password = 'T3STT3ST'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if uppercase and special', () => {
    const password = 'TE$TTE$T'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if number and special', () => {
    const password = '73$773$7'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if lowercase, number and special', () => {
    const password = 't3$tt3$t'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })

  it('should throw error if uppercase, number and special', () => {
    const password = 'T3$TT3$T'
    const passwordFn = () => registerService.checkPassword(password)
    chai.assert.throws(passwordFn, 'Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  })
})
