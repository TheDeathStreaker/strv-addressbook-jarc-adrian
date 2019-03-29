'use strict'

const mongoose = require('mongoose')
const softdelete = require('mongoose-delete')

const initUserModel = dbconn => {
  const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    locked: {
      type: Boolean,
      default: false,
    },
  }, {
    collection: 'users',
    timestamps: true,
  })

  // Add indexes
  userSchema.index({
    email: -1,
    deleted: 1,
  })

  // Apply plugins
  userSchema.plugin(softdelete, {
    overrideMethods: 'all',
    deletedAt: true,
  })

  return dbconn.model('Users', userSchema, 'users')
}

module.exports = initUserModel
